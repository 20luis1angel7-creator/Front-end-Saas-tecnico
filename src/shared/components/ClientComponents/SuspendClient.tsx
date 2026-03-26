
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"
import { useState } from "react";
import Toast from "../ui/Toast";

function Suspend({ client }: clientProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const suspendClient = async (id: string) => {
        const res = await fetch(`${API_URL}/clients/${id}/suspend`, {
            method: "PATCH"
        })
        if (!res.ok) {
            setToast({ message: "Error suspend client", type: "error" })
            return
        }
        setToast({ message: "Client suspend", type: "error" })
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
            <button onClick={() => suspendClient(client.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-amber-400">
                suspend
            </button>
        </>
    )
}

export default Suspend