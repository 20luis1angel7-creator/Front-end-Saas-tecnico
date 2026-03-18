import type { OrderProps } from "../../../type/OrderType"


function StartOrder({order}: OrderProps) {
    const handlerStart = async (id: string) => {
        await fetch(`http://localhost:3000/orders/${id}/start`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "IN_PROGRESS"
            })
        })
        alert("Order started")
    }

    return (
        <>
            <button onClick={() => handlerStart(order.id)}>
                Start
            </button>
        </>
    )
}
export default StartOrder