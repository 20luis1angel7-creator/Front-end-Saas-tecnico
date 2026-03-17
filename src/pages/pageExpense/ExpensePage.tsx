import { useEffect, useState } from "react";
import type { Expense } from "../../type/ExpenseType";



function ExpensePage() {
    const [expenses, setExpense] = useState<Expense[]>([])

    useEffect(() => {
        const getExpense = async () => {
            const res = await fetch("http://localhost:3000/expenses")
            const data: Expense[] = await res.json()
            setExpense(data)
        }
    getExpense()
    },[])

    return (
        <>
            <h2>Expense page</h2>

            {expenses.map((expense) => {
                <div key={expense.id}>
                    <h3>{expense.companyId}</h3>
                    <h3>{expense.description}</h3>
                    <h3>{expense.amount}</h3>
                    {/*<h3>{expense.date}</h3>
                    <h3>{expense.createdAt}</h3>*/}
                </div>
            })}
        </>
    )
}
export default ExpensePage