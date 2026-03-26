import { API_URL } from "../../../api/api"
import type { OrderProps } from "../../../type/OrderType"
import Toast from "../ui/Toast";
import { useState } from "react";


function StartOrder({order}: OrderProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    const handlerStart = async (id: string) => {
        const res = await fetch(`${API_URL}/orders/${id}/start`,{
            method: "PATCH"
        })
        if (!res.ok) {
            setToast({ message: "Error start", type: "error" })
            return
        }
        setToast({ message: "Order started", type: "success" })
        setTimeout(() => {
            window.location.reload()
        },1200)
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
            <button onClick={() => handlerStart(order.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-400">
                Start
            </button>
        </>
    )
}
export default StartOrder