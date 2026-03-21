import { API_URL } from "../../../api/api"
import type { OrderProps } from "../../../type/OrderType"


function StartOrder({order}: OrderProps) {
    const handlerStart = async (id: string) => {
        const res = await fetch(`${API_URL}/orders/${id}/start`,{
            method: "PATCH"
        })
        if (!res.ok) {
            alert("Error start")
            return
        }
        alert("Order started")
        window.location.reload()
    }

    return (
        <>
            <button onClick={() => handlerStart(order.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-400">
                Start
            </button>
        </>
    )
}
export default StartOrder