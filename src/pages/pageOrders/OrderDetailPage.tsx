import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Order } from "../../type/OrderType"
import CompletedOrder from "../../shared/components/OrderComponent/CompletedOrder"
import StartOrder from "../../shared/components/OrderComponent/StartOrder"
import CancelOrder from "../../shared/components/OrderComponent/CancelOrder"

function OrderDetail() {

    const { id } = useParams()

    const [order, setOrder] = useState<Order | null>(null)

    useEffect(() => {
        const getorder = async () => {
            const res = await fetch(`http://localhost:3000/orders/${id}`)
            const data = await res.json()
            setOrder(data)
        }
    getorder()
    },[id])
    console.log(id)

    return (
        <>
            <h2>Order detail</h2>

            {order && (
                <div>
                    <h2>{order.clientId}</h2>
                    {/*<p>{order.createdAt}</p>*/}

                    <StartOrder order={order} />
                    <CompletedOrder order={order} />
                    <CancelOrder order={order} />
                </div>
            )}
        </>
    )
}
export default OrderDetail