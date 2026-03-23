
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Suspend from "../../shared/components/ClientComponents/SuspendClient"
import ActivateClient from "../../shared/components/ClientComponents/ActivateClient"
import EliminarClient from "../../shared/components/ClientComponents/DeleteClient"
import type { Client } from "../../type/Client"
import { API_URL } from "../../api/api"

function ClientDetailPage() {

    
    const { id } = useParams<{id: string}>()
    const [client, setClient] = useState<Client | null>(null)
    
    useEffect(() => {
        const getClient = async () => { 
            const res = await fetch(`${API_URL}/clients/${id}`)
            if (!res.ok) {
                alert("Error loading client")
                return
            }
            const data = await res.json()
            setClient(data)
        }
        
        getClient()
    },[id])

    return (
        <>
            <h1 className="font-bold px-4 py-2 text-black dark:text-white">Client details</h1>
            <h2 className="font-bold px-4 py-2 text-black dark:text-white">cliente {id}</h2>

            {!client && <p>Cargando client...</p>}

            {client && (
                <div className="font-bold px-4 py-2 text-black dark:text-white">
                    <h3 className="py-1">Name:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.name}</h3>
                    <h3 className="py-1">Nickname:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.nickname}</h3>
                    <h3 className="py-1">Cedula:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.cedula}</h3>
                    <h3 className="py-1">Address:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.address}</h3>
                    <h3 className="py-1">Phone:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.phone}</h3>
                    <h3 className="py-1">Plan:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.planId}</h3>
                    <h3 className="py-1">Router:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{client.routerSerial ?? "no router"}</h3>

                    <div className="py-5">
                        <Suspend client={client} />
                        <ActivateClient client={client} />
                        <EliminarClient client={client} />
                    </div>
                </div>
            )}
        </>
    )
}
export default ClientDetailPage