import type { Order } from "../../type/OrderType"
import { useEffect, useState } from "react"
import { API_URL } from "../../api/api"
import type { Material } from "../../type/MaterialType"
import { Link } from "react-router-dom"
import type { Plan } from "../../type/PlansType"
import type { Client } from "../../type/Client"


function TecnicalView() {

    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const getOrder = async () => {
            const res = await fetch(`${API_URL}/orders`)
            const data: Order[] = await res.json()
            setOrders(data)
        }
        getOrder()
    },[])

    const [materials, setMaterials] = useState<Material[]>([])
    
        useEffect(()=> {
            const getMaterial = async () => {
                const res = await fetch(`${API_URL}/materials`)
                if (!res.ok) {
                    const errorText = await res.text()
                    console.log("MATERIAL LIST ERROR:", errorText)
                    alert("Error loading materials")
                    return
                }
    
                const data: Material[] = await res.json()
                console.log("MATERIAL LIST DATA:", data)
                setMaterials(data)
            }
        getMaterial()
        },[])

        const [plans, setPlans] = useState<Plan[]>([])
        
           
            useEffect(() => {
                const getPlans = async () => {
                    try {
                        const res = await fetch(`${API_URL}/plans`)
                        if (!res.ok) {
                            const errorText = await res.text()
                            console.log("PLAN LIST ERROR:", errorText)
                            alert("error loading plan")
                            return
                        }
                        const data: Plan[] = await res.json()
                        setPlans(data)
                    } catch (e) {
                        console.error(e)
                    }
                }
                getPlans()
            },[])
        

            const [clients, setClients] = useState<Client[]>([])
            
                useEffect(() => {
                    const clients = async () => {
                        try {
                            const res = await fetch(`${API_URL}/clients`)
                            
                            if(!res.ok) {
                                alert("Error loading clients")
                                return
                            }
                            const data: Client[] = await res.json()
                            setClients(data)
                        } catch (error) {
                            console.log(error)
                        }   
                    }    
                    clients();
                }, [])
            
                


    return (
    <div className="bg-slate-50 min-h-screen p-6 dark:bg-gray-900">

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white px-5 py-5">
            View
        </h2>

        <section className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-slate-200 bg-white dark:border-gray-700 dark:text-gray-200">
                <thead className="bg-slate-100 text-slate-700 uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                    <tr>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Create</th>
                        <th className="px-4 py-2">Complete</th>
                        <th className="px-4 py-2">actions</th>
                    </tr>
                </thead>

                <tbody className="bg-white dark:bg-gray-900">
                    {orders.map((order) => {
                        const client = clients.find((c) => c.id === order.clientId)

                        return (
                            <tr key={order.id} className="border-b border-slate-200 text-black hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800">
                                <td className="px-4 py-2">{order.status}</td>
                                <td className="px-4 py-2">{client ? client.name : "Client not found"}</td>
                                <td className="px-4 py-2">{client ? client.address : "No address"}</td>
                                <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className="px-4 py-2">
                                    {order.completedAt ? new Date(order.completedAt).toLocaleDateString() : "undated"}
                                </td>

                                <td className="px-4 py-2 space-x-2">
                                    <Link to={`/orders/${order.id}`}>
                                        <button className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 dark:bg-blue-700">
                                            D
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>

        <div className="grid grid-cols-2 gap-8 mt-6">

            <section className="overflow-x-auto">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white px-5 py-5">
                    Materials
                </h2>

                <table className="w-full text-sm text-left border border-slate-200 bg-white dark:border-gray-700 dark:text-gray-200">
                    <thead className="bg-slate-100 text-slate-700 uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                            <th className="px-4 py-2">name</th>
                            <th className="px-4 py-2">stock</th>
                            <th className="px-4 py-2">actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">
                        {materials.map((material) => (
                            <tr
                                key={material.id}
                                className="border-b border-slate-200 text-slate-800 hover:bg-slate-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                            >
                                <td className="px-4 py-2">{material.name}</td>
                                <td className="px-4 py-2">{material.stock}</td>

                                <td className="px-4 py-2 space-x-2">
                                    <Link to={`/materials/${material.id}`}>
                                        <button className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 dark:bg-blue-700">
                                            S
                                        </button>
                                    </Link>

                                    <Link to={`/materials/${material.id}/update`}>
                                        <button className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 dark:bg-blue-700">
                                            U
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="overflow-x-auto">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white px-5 py-5">
                    Plans
                </h2>

                <table className="w-full text-sm text-left border border-slate-200 bg-white dark:border-gray-700 dark:text-gray-200">
                    <thead className="bg-slate-100 text-slate-700 uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                            <th className="px-4 py-2">name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Speed</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">
                        {plans.map((plan) => (
                            <tr
                                key={plan.id}
                                className="border-b border-slate-200 text-slate-800 hover:bg-slate-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                            >
                                <td className="px-4 py-2">{plan.name}</td>
                                <td className="px-4 py-2">{plan.price}</td>
                                <td className="px-4 py-2">{plan.speed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>

        <h2 className="text-xl font-bold text-slate-800 dark:text-white px-5 py-5">
            Clients
        </h2>

        <section className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-slate-200 bg-white dark:border-gray-700 dark:text-gray-200">
                <thead className="bg-slate-100 text-slate-700 uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                    <tr>
                        <th className="px-4 py-2">name</th>
                        <th className="px-4 py-2">nickname</th>
                        <th className="px-4 py-2">cedula</th>
                        <th className="px-4 py-2">address</th>
                        <th className="px-4 py-2">phone</th>
                        <th className="px-4 py-2">plan</th>
                        <th className="px-4 py-2">status</th>
                        <th className="px-4 py-2">routerSerial</th>
                        <th className="px-4 py-2">actions</th>
                    </tr>
                </thead>

                <tbody className="bg-white dark:bg-gray-900">
                    {clients.map((client) => (
                        <tr
                            key={client.id}
                            className="border-b border-slate-200 text-slate-800 hover:bg-slate-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                        >
                            <td className="px-4 py-2">{client.name}</td>
                            <td className="px-4 py-2">{client.nickname}</td>
                            <td className="px-4 py-2">{client.cedula}</td>
                            <td className="px-4 py-2">{client.address}</td>
                            <td className="px-4 py-2">{client.phone}</td>
                            <td className="px-4 py-2">{plans.find((plan) => plan.id === client.planId)?.name ?? "no plan"}</td>
                            <td className="px-4 py-2">{client.status}</td>
                            <td className="px-4 py-2">{client.routerSerial}</td>

                            <td className="px-4 py-2 space-x-2">
                                <Link to={`/clients/${client.id}`}>
                                    <button className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 dark:bg-blue-700">
                                        S
                                    </button>
                                </Link>

                                <Link to={`/clients/${client.id}/edit`}>
                                    <button className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 dark:bg-blue-700">
                                            U
                                        </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    </div>
)}export default TecnicalView