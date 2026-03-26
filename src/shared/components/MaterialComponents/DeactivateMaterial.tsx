import { API_URL } from "../../../api/api"
import type { MaterialProps } from "../../../type/MaterialType"
import { useState } from "react";
import Toast from "../ui/Toast";

function Deactivate( {material}: MaterialProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const handlerDeactivate = async () => {
        const res = await fetch(`${API_URL}/materials/${material.id}/deactivate`, {
            method: "PATCH",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify({
            //     active: true
            // })
        })
        if (!res.ok) {
            setToast({ message: "Error deactivate", type: "error" })
            return
        }

        setToast({ message: "Material deactivate", type: "success" })
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
            <button onClick={handlerDeactivate}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-700">
                Deactivate
            </button>
        </>
    )
}
export default Deactivate