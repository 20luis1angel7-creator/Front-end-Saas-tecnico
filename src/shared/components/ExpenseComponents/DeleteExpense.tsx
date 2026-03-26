import { API_URL } from "../../../api/api"
import type { ExpenseProps } from "../../../type/ExpenseType"
import { useState } from "react";
import Toast from "../ui/Toast";

function DeleteExpense({expense}: ExpenseProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const deleteE = async (id: string) => {
        try{
            const res = await fetch(`${API_URL}/expenses/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) {
                setToast({ message: "Error al eliminar expense", type: "error" })
                return
            }

            setToast({ message: "Expense deleted", type: "success" })
            window.location.reload()
        }catch(e){
            console.log(e)
            setToast({ message: "error al eliminar expense", type: "error" })
        }
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
            <button onClick={() => deleteE(expense.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-red-400">
                Delete
            </button>
        </>
    )
}
export default DeleteExpense