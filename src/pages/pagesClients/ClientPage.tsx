import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { Client } from "../../type/Client"
import { API_URL } from "../../api/api"



function GetClients() {

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
            <h2 className="font-bold px-4 py-2 text-black dark:text-white">Clients page</h2>

            <Link to="/clients/new">
            <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">create client</button>
            </Link>

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
                        <th className="px-4 py-2">acciones</th>
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
                                <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show client</button>
                                </Link>

                                <Link to={`/clients/${client.id}/edit`}>
                                <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">update client</button>
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

export default GetClients