import { useEffect, useState } from "react";
import type { Expense } from "../../type/ExpenseType";
import { Link } from "react-router-dom";
import { API_URL } from "../../api/api";


function ExpensePage() {
    const [expenses, setExpenses] = useState<Expense[]>([])

    useEffect(() => {
        const getExpense = async () => {
            const res = await fetch(`${API_URL}/expenses`)
            if (!res.ok) {
                alert("Error loading expenses")
                return
            }
            const data: Expense[] = await res.json()
            console.log("EXPENSE LIST DATA:", data)
            data.forEach(e => console.log("ID:", e.id))
            setExpenses(data)
        }
    getExpense()
    },[])

    return (
        <>
            <h2 className="font-bold px-4 py-2 text-black dark:text-white">Expense page</h2>

            <Link to="/expenses/new">
            <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">
                create expense
            </button>
            </Link>

            <section className="overflow-x-auto ">
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                        <th className="px-4 py-2">description</th>
                        <th className="px-4 py-2">amount</th>
                        <th className="px-4 py-2">date</th>
                        <th className="px-4 py-2">createdAt</th>
                        <th className="px-4 py-2">acciones</th>
                        </tr>
                    </thead>

                     <tbody className="bg-white dark:bg-gray-900">
                        {expenses.map((expense) => (
                            
                            <tr key={expense.id || expense.description} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                            
                                <td className="px-4 py-2">{expense.description}</td>
                                <td className="px-4 py-2">{expense.amount}</td>
                                <td className="px-4 py-2">{expense.date ? new Date(expense.date).toLocaleDateString() : "sin fecha"}</td>
                                <td className="px-4 py-2">{expense.createdAt
                                        ? new Date(expense.createdAt).toLocaleDateString()
                                        : "sin fecha"}
                                    </td>
                                <td>
                                    <Link to={`/expenses/${expense.id}`}>
                                    <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show expense</button>
                                    </Link>

                                    <Link to={`/expenses/${expense.id}/update`}>
                                    <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">update expense</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </>
    )
}
export default ExpensePage