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
                const errorText = await res.text()
                console.log("ORDER DETAIL ERROR:", errorText)
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
                <div className="font-bold px-4 py-2 text-black dark:text-white">
                    <h3 className="py-1">Client id:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{order.clientId}</h3>
                    <h3 className="py-1">Status:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{order.status}</h3>
                    <h3 className="py-1">create:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{new Date(order.createdAt).toLocaleDateString()}</h3>
                    <h3 className="py-1">completed:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{order.completedAt ? new Date(order.completedAt).toLocaleDateString() : "sin fecha"}</h3>

                    <StartOrder order={order} />
                    <CompletedOrder order={order} />
                    <CancelOrder order={order} />
                </div>
            )}
        </>
    )
}
export default OrderDetail