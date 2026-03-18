import type { OrderProps } from "../../../type/OrderType"



function CancelOrder({order}: OrderProps) {

    const handlerCancel = async (id: string) => {
        await fetch(`http://localhost:3000/orders/${id}/cancel`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "CANCELLED"
            })
        })
        alert("Cancel order")
    }

    return (
        <>
            <button onCanPlay={() => handlerCancel(order.id)}>
                Cancel
            </button>
        </>
    )
}
export default CancelOrder