import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Expense } from "../../type/ExpenseType"
import { API_URL } from "../../api/api"




function ExpenseDetail() {

    const { id } = useParams()
    const [expense, setExpense] = useState<Expense | null>(null)

    useEffect(() => {
        const getExpense = async () => {
            const res = await fetch(`${API_URL}/expenses/${id}`)
            if (!res.ok) {
                alert("Error loading expense")
                return
            }
            const data = await res.json()
            setExpense(data)
        }
    getExpense()
    },[id])

    return (
        <>
            <h2>expense detail</h2>
            <p>expense {id}</p>

            {!expense && <p>Cargando expense...</p>}
            
            {expense && (
                <div>
                    <h3>{expense.description}</h3>
                    <h3>{expense.amount}</h3>
                    <h3>{new Date(expense.date).toLocaleDateString()}</h3>
                    <h3>{new Date(expense.createdAt).toLocaleDateString()}</h3>
                </div>
            )}
        </>
    )
}
export default ExpenseDetail