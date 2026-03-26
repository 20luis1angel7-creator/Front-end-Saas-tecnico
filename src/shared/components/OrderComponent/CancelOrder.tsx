import { API_URL } from "../../../api/api"
import type { OrderProps } from "../../../type/OrderType"
import Toast from "../ui/Toast";
import { useState } from "react";

function CancelOrder({order}: OrderProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
        
    const handlerCancel = async (id: string) => {
        const res = await fetch(`${API_URL}/orders/${id}/cancel`, {
            method: "PATCH"
        })
        if(!res.ok) {
            setToast({ message: "Error canceller", type: "error" })
            return
        }
        setToast({ message: "cancelled", type: "error" })
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
            <button onClick={() => handlerCancel(order.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-400">
                Cancel
            </button>
        </>
    )
}
export default CancelOrder