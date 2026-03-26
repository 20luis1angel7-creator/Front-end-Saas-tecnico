
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"
import { useState } from "react";
import Toast from "../ui/Toast";

function ActivateClient({client}: clientProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const activate = async ( id: string) => {
        const res = await fetch(`${API_URL}/clients/${id}/activate`,{
            method: "PATCH"
        })
        if (!res.ok) {
            setToast({ message: "Error ativate client", type: "error" })
            return
        }
        setToast({ message: "Client activate", type: "success" })
        window.location.reload()
        
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
        <button onClick={() => activate(client.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-green-400">
            activate
        </button>
        </>
    )
}
export default ActivateClient