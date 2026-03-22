import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Order } from "../../type/OrderType"
import CompletedOrder from "../../shared/components/OrderComponent/CompletedOrder"
import StartOrder from "../../shared/components/OrderComponent/StartOrder"
import CancelOrder from "../../shared/components/OrderComponent/CancelOrder"
import { API_URL } from "../../api/api"

function OrderDetail() {

    const { id } = useParams()

    const [order, setOrder] = useState<Order | null>(null)

    useEffect(() => {
        const getorder = async () => {
            const res = await fetch(`${API_URL}/orders/${id}`)
            if (!res.ok) {
                alert("error loading order")
                return
            }
            const data = await res.json()
            setOrder(data)
        }
    getorder()
    },[id])

    return (
        <>
            <h1 className="font-bold text-back px-4 py-2 text-black dark:text-white">Orders details</h1>

            {!order && <p>Loading... </p>}
            
            {order && (
                <div>
                    <h2>{order.clientId}</h2>
                    <h3>{order.status}</h3>
                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                    <p>{order.completedAt ? new Date(order.completedAt).toLocaleDateString() : "sin fecha"}</p>

                    <StartOrder order={order} />
                    <CompletedOrder order={order} />
                    <CancelOrder order={order} />
                </div>
            )}
        </>
    )
}
export default OrderDetail