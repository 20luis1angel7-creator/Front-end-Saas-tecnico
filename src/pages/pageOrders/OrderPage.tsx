
import type { Order } from "../../type/OrderType"
import { useEffect, useState } from "react"


function OrderPage() {
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const getOrders = async () => {
            const res = await fetch("http://localhost:3000/orders")
            const data: Order[] = await res.json()
            setOrders(data)
        }
        getOrders()
    },[])

    return (
        <>
            <h2>Orders page</h2>

            <section>
                {orders.map(order => (
                    <div key={order.id}>
                        <h2>{order.clientId}</h2>
                        <h3>{order.status}</h3>
                        {/*<h3>{order.createdAt}</h3>*/}
                    </div>
                ))}
            </section>
        </>
    )
}
export default OrderPage