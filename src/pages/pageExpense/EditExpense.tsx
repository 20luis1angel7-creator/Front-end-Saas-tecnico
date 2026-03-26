import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../api/api"
import Toast from "../../shared/components/ui/Toast"



function EditExpense() {
    const { id } = useParams()
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const [expense, setExpense] = useState({
        description: "",
        amount: 0
    })

    useEffect(() => {
        fetch(`${API_URL}/expenses/${id}`)
            .then(res => res.json())
            .then(data => setExpense(data))
    },[id])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/expenses/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        })
        if (!res.ok) {
                setToast({ message: "error update client", type: "error" })
                return
        }
        setToast({ message: "Update client", type: "success" })
    }

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
            <form onSubmit={handlerSubmit} 
            className="flex flex-col px-4 py-4 text-black dark:text-gray-200">
                <h3>Description:</h3>
                <input type="text"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={expense.description}
                onChange={(e) => 
                    setExpense({ ...expense, description: e.target.value})
                } />

                <h3>Amount:</h3>
                <input type="number"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={expense.amount}
                onChange={(e) => 
                    setExpense({ ...expense, amount: Number(e.target.value)})
                } />

                

                <button type="submit"
                    className="flex font-bold m-6 px-3 py-1 h-9 w-24 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                    </button>
            </form>
        </>
    )
}
export default EditExpense