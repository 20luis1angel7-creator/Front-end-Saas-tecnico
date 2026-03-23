import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Expense } from "../../type/ExpenseType"
import { API_URL } from "../../api/api"
import DeleteExpense from "../../shared/components/ExpenseComponents/DeleteExpense"




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
            <h2 className="font-bold px-4 py-2 text-black dark:text-white">expense detail</h2>
            {/* <p>expense {id}</p> */}

            {!expense && <p>Cargando expense...</p>}
            
            {expense && (
                <div className="font-bold px-4 py-2 text-black dark:text-white">
                    <h3 className="py-1">Description:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{expense.description}</h3>
                    <h3 className="py-1">Amount:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{expense.amount}</h3>
                    <h3 className="py-1">Date:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{new Date(expense.date).toLocaleDateString()}</h3>
                    <h3 className="py-1">Created:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{new Date(expense.createdAt).toLocaleDateString()}</h3>

                    <div className="py-5">
                        <DeleteExpense expense={expense}/>
                    </div>
                </div>
            )}
        </>
    )
}
export default ExpenseDetail