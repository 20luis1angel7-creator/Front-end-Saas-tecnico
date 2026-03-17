import type { OrderProps } from "../../../type/OrderType"


function DeleteOrder({order}: OrderProps) {
    
    const orderDelete = async (id: string) => {
        await fetch(`http://localhost:3000/orders/${id}`, {
            method: "DELETE"
        })
        alert("Order deleted")
    }

    return (
        <>
            <button onClick={() => orderDelete(order.id)}>
                Delete
            </button>
        </>
    )
}
export default DeleteOrder