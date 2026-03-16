
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Suspend from "../../shared/components/ClientComponents/SuspendClient"
import ActivateClient from "../../shared/components/ClientComponents/ActivateClient"
import EliminarClient from "../../shared/components/ClientComponents/DeleteClient"
import type { Client } from "../../type/Client"

function ClientDetailPage() {

    
    const { id } = useParams<{id: string}>()
    const [client, setClient] = useState<Client | null>(null)
    
    useEffect(() => {
        const getClient = async () => { 
            const res = await fetch(`http://localhost:3000/clients/${id}`)
            const data = await res.json()
            setClient(data)
        }
        getClient()
    },[id])
    console.log(id)
    

    return (
        <>
            <h1>Client details</h1>
            <h2>cliente {id}</h2>

            {client && (
                <div>
                    <h3>{client.name}</h3>
                    <h3>{client.nickname}</h3>
                    <h3>{client.cedula}</h3>
                    <h3>{client.address}</h3>
                    <h3>{client.phone}</h3>
                    <h3>{client.planId}</h3>
                    <h3>{client.routerSerial ?? "no router"}</h3>

                    <Suspend client={client} />
                    <ActivateClient client={client} />
                    <EliminarClient client={client} />
                </div>
            )}
        </>
    )
}
export default ClientDetailPage