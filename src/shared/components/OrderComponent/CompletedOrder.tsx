import type { OrderProps } from "../../../type/OrderType"


function CompletedOrder({order}: OrderProps) {
    
    const orderDelete = async (id: string) => {
        await fetch(`http://localhost:3000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "COMPLETED"
            })
        })
        alert("Order completed")
    }

    return (
        <>
            <button onClick={() => orderDelete(order.id)}>
                Delete
            </button>
        </>
    )
}
export default CompletedOrder