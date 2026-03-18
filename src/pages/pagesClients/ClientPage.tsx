import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { Client } from "../../type/Client"



function GetClients() {

    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        const clients = async () => {
            try {
                const res = await fetch("http://localhost:3000/clients")
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
            <h2 className="font-bold hover:text-zinc-400 px-4 py-2">clients page</h2>

            <Link to="clients/new">
            <button className="bg-gray-700 rounded px-4 py-2 my-5 hover:bg-gray-500 ">create client</button>
            </Link>

            <section className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700">
                    <thead className="bg-gray-800 text-gray-200 uppercase text-xs">
                        <tr>
                        <th className="px-4 py-2">name</th>
                        <th className="px-4 py-2">nickname</th>
                        <th className="px-4 py-2">cedula</th>
                        <th className="px-4 py-2">address</th>
                        <th className="px-4 py-2">phone</th>
                        <th className="px-4 py-2">planId</th>
                        <th className="px-4 py-2">routerSerial</th>
                        <th className="px-4 py-2">acciones</th>
                        </tr>
                    </thead>

                    <tbody className="bg-gray-900">
                    {clients.map((client) => (
                        <tr key={client.id} className="border-b border-gray-700 hover:bg-gray-800">
                            
                            <td className="px-4 py-2">{client.name}</td>
                            <td className="px-4 py-2">{client.nickname}</td>
                            <td className="px-4 py-2">{client.cedula}</td>
                            <td className="px-4 py-2">{client.address}</td>
                            <td className="px-4 py-2">{client.phone}</td>
                            <td className="px-4 py-2">{client.planId}</td>
                            <td className="px-4 py-2">{client.routerSerial}</td>

                            <td className="px-4 py-2 space-x-2">
                                <Link to={`clients/${client.id}`}>
                                <button className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-500">show client</button>
                                </Link>

                                <Link to={`/clients/${client.id}/edit`}>
                                <button className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-500">update client</button>
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