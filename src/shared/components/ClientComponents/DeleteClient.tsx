
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"
import { useState } from "react";
import Toast from "../ui/Toast";

function EliminarClient({client}: clientProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const eliminar = async ( id: string) => {
        try {
            const res = await fetch(`${API_URL}/clients/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) {
                setToast({ message: "Error delete client", type: "error" })
                return
            }
            setToast({ message: "Client delete", type: "success" })
            window.location.reload()
        } catch (e) {
            console.error(e)
            setToast({ message: "Error al eliminar cliente", type: "error" })
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
            <button onClick={() => eliminar(client.id)} 
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-red-400">
                Delete
            </button>
        </>
    )
}
export default EliminarClient