import { API_URL } from "../../../api/api"
import type { OrderProps } from "../../../type/OrderType"



function CancelOrder({order}: OrderProps) {

    const handlerCancel = async (id: string) => {
        const res = await fetch(`${API_URL}/orders/${id}/cancel`, {
            method: "PATCH"
        })
        if(!res.ok) {
            alert("Error al cancelar")
            return
        }
        alert("Order cancelled")
        window.location.reload()
    }

    return (
        <>
            <button onClick={() => handlerCancel(order.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-400">
                Cancel
            </button>
        </>
    )
}
export default CancelOrder