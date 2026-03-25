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
            console.log("ORDER LIST DATA:", data)
            setOrders(data)
        }
        getOrders()
    },[])

    return (
        <>
            <h2 className=" text-black dark:text-white px-5 p-5 ">
                Orders page</h2>

            <section>
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>

                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Cedula</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Create</th>
                        <th className="px-4 py-2">Complete</th>
                        <th className="px-4 py-2">acciones</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">

                {orders.map(order => (
                    <tr key={order.id} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                            
                        
                        <td className="px-4 py-2">{order.status}</td><td className="px-4 py-2">{order.client?.cedula ?? "No cedula"}</td>
                        <td className="px-4 py-2">{order.client?.name ?? "No name"}</td>
                        <td className="px-4 py-2">{order.client?.address ?? "No address"}</td>
                        <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                        <td className="px-4 py-2">{order.completedAt ? new Date(order.completedAt).toLocaleDateString() : "sin fecha"}</td>

                        <td className="px-4 py-2 space-x-2">
                            <Link to={`/orders/${order.id}`}>
                                <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                    Show detail</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                  </tbody>
                </table>
            </section>
        </>
    )
}
export default OrderPage