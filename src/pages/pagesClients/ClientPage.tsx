import { useEffect, useState } from "react"
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

    const showClient = clients.map((client) => {
        return (
            <div key={client.id}>
                <h2>{client.name}</h2>
                <p>{client.nickname}</p>
                <p>{client.cedula}</p>
                <p>{client.address}</p>
                <p>{client.phone}</p>
                <p>{client.planId}</p>
                <p>{client.routerSerial}</p>
            </div>
        )
    })

        
    return (
        <>
            <h2>aqui va estar clientes</h2>
            <section>{showClient}</section>

            
        </>
    )
    
}

export default GetClients