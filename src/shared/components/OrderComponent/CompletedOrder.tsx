import { API_URL } from "../../../api/api"
import type { OrderProps } from "../../../type/OrderType"


function CompletedOrder({order}: OrderProps) {
    
    const orderComplete = async (id: string) => {
        const res = await fetch(`${API_URL}/orders/${id}/complete`, {
            method: "PATCH"
        })
        if (!res.ok) {
            alert("Error in complete")
            return
        }
        alert("Order completed")
        window.location.reload()
    }

    return (
        <>
            <button onClick={() => orderComplete(order.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-400">
                Complete
            </button>
        </>
    )
}
export default CompletedOrder