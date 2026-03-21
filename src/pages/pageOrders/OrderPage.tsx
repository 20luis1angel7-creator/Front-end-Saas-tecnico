import { API_URL } from "../../api/api"




import type { Order } from "../../type/OrderType"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function OrderPage() {
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const getOrders = async () => {
            const res = await fetch(`${API_URL}/orders`)
            if ( !res.ok ) {
                alert("error loading orders")
                return
            }
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

                        <Link to={`/orders/${order.id}`}>
                            <button>Show detail</button>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
}
export default OrderPage