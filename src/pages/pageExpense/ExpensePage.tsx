import { useEffect, useState } from "react";
import type { Expense } from "../../type/ExpenseType";
import { Link } from "react-router-dom";
import { API_URL } from "../../api/api";


function ExpensePage() {
    const [expenses, setExpense] = useState<Expense[]>([])

    useEffect(() => {
        const getExpense = async () => {
            const res = await fetch(`${API_URL}/expenses`)
            if (!res.ok) {
                alert("Error loading expenses")
                return
            }
            const data: Expense[] = await res.json()
            setExpense(data)
        }
    getExpense()
    },[])

    return (
        <>
            <h2>Expense page</h2>

            <Link to="/expenses/new">
            <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">create expense</button>
            </Link>

            {expenses.map((expense) => (
                <div key={expense.id}>
                    <h3>{expense.description}</h3>
                    <h3>{expense.amount}</h3>
                    <h3>{new Date(expense.date).toLocaleDateString()}</h3>
                    <h3>{new Date(expense.createdAt).toLocaleDateString()}</h3>

                    <Link to={`/expenses/${expense.id}`}>
                    <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show expense</button>
                    </Link>

                    <Link to={`/expenses/${expense.id}/update`}>
                    <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">update expense</button>
                    </Link>
                </div>
            ))}
        </>
    )
}
export default ExpensePage