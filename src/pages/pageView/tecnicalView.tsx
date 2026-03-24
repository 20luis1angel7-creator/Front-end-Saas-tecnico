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
        <>
            <h2 className=" text-black dark:text-white px-5 p-5 ">
                View</h2>

            <section>
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>

                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Create</th>
                        <th className="px-4 py-2">Complete</th>
                        <th className="px-4 py-2">actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                               <td className="px-4 py-2">{order.status}</td>
                                <td className="px-4 py-2">{order.clientId}</td>
                                <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className="px-4 py-2">{order.completedAt ? new Date(order.completedAt).toLocaleDateString() : "undated"}</td>

                                <td className="px-4 py-2 space-x-2">
                                    <Link to={`/orders/${order.id}`}>
                                        <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                            Detail</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

                        
            <div className="grid grid-cols-2 gap-30 mt-6">
               
                <section className="overflow-x-auto ">

                     <h2 className=" text-black dark:text-white px-5 p-5 ">
                    Materials</h2>

                    <table className="w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                        <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                            <tr>
                            {/* <th className="px-4 py-2">Id</th> */}
                            <th className="px-4 py-2">name</th>
                            <th className="px-4 py-2">stock</th>
                            {/* <th className="px-4 py-2">minStock</th>
                            <th className="px-4 py-2">unitPrice</th>
                            <th className="px-4 py-2">active</th>*/}
                            <th className="px-4 py-2">actions</th> 
                            </tr>
                        </thead>

                        <tbody className="bg-white dark:bg-gray-900">
                            {materials.map((material) => (
                                <tr key={material.id} className="text-black dark:text-white">
                                    {/* <td className="px-4 py-2">{material.id}</td> */}
                                    <td className="px-4 py-2">{material.name}</td>
                                    <td className="px-4 py-2">{material.stock}</td>
                                    {/*<td className="px-4 py-2">{material.minStock}</td>
                                    <td className="px-4 py-2">{material.unitPrice}</td>
                                    <td className="px-4 py-2">{material.active ? "Active" : "Inactive"}</td> */}

                                    <td className="px-4 py-2 space-x-2">
                                        <Link to={`/materials/${material.id}`}>
                                            <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                                Show</button>
                                        </Link>

                                        <Link to={`/materials/${material.id}/update`}>
                                            <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                                Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>


                

                <section className="overflow-x-auto ">
                    <h2 className=" text-black dark:text-white px-5 p-5 ">
                    Plans</h2>
                    <table className="w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                        <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                            <tr>
                                {/*<th className="px-4 py-2">id</th>*/}
                                <th className="px-4 py-2">name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Speed</th>
                                {/* <th className="px-4 py-2">Active</th>
                                <th className="px-4 py-2">Created</th>
                                <th className="px-4 py-2">acciones</th> */}
                            </tr>
                        </thead>

                        <tbody className="bg-white dark:bg-gray-900">
                            {plans.map((plan) => (
                                <tr key={plan.id} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                                    <td className="px-4 py-2">{plan.name}</td>
                                    <td className="px-4 py-2">{plan.price}</td>
                                    <td className="px-4 py-2">{plan.speed}</td>
                                    {/* <td className="px-4 py-2">{plan.isActive ? "Active" : "Inactive"}</td>
                                    <td className="px-4 py-2">{plan.createdAt ? new Date(plan.createdAt).toLocaleDateString() : "sin fecha"}</td> */}

                                    {/* <td className="px-4 py-2 space-x-2">
                                    <Link to={`/plans/${plan.id}`}>
                                        <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show plan</button>
                                    </Link>

                                    <Link to={`/plans/${plan.id}/edit`}>
                                        <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">edit plan</button>
                                    </Link>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>

            <h2 className=" text-black dark:text-white px-5 p-5 ">
                Clients</h2>

            <section className="overflow-x-auto ">
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                        <th className="px-4 py-2">name</th>
                        <th className="px-4 py-2">nickname</th>
                        <th className="px-4 py-2">cedula</th>
                        <th className="px-4 py-2">address</th>
                        <th className="px-4 py-2">phone</th>
                        <th className="px-4 py-2">planId</th>
                        <th className="px-4 py-2">status</th>
                        <th className="px-4 py-2">routerSerial</th>
                        <th className="px-4 py-2">actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">
                    {clients.map((client) => (
                        <tr key={client.id} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                            
                            <td className="px-4 py-2">{client.name}</td>
                            <td className="px-4 py-2">{client.nickname}</td>
                            <td className="px-4 py-2">{client.cedula}</td>
                            <td className="px-4 py-2">{client.address}</td>
                            <td className="px-4 py-2">{client.phone}</td>
                            <td className="px-4 py-2">{client.planId}</td>
                            <td className="px-4 py-2">{client.status}</td>
                            <td className="px-4 py-2">{client.routerSerial}</td>

                            <td className="px-4 py-2 space-x-2">
                                <Link to={`/clients/${client.id}`}>
                                <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                    Show</button>
                                </Link>

                                <Link to={`/clients/${client.id}/edit`}>
                                <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">
                                    Update</button>
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
export default TecnicalView