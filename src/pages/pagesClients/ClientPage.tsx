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
            <h2>clients page</h2>

            <Link to="clients/new">
            <button>create client</button>
            </Link>

            <section>
                {clients.map((client) => (
                    <div key={client.id}>
                        <h2>{client.name}</h2>
                        <p>{client.nickname}</p>
                        <p>{client.cedula}</p>
                        <p>{client.address}</p>
                        <p>{client.phone}</p>
                        <p>{client.planId}</p>
                        <p>{client.routerSerial}</p>

                        <Link to={`clients/${client.id}`}>
                        <button>show client</button>
                        </Link>

                        <Link to={`clients/${client.id}/edit`}>
                        <button>update client</button>
                        </Link>
                    </div>
                ))}
            </section>

        
        </>
    )
    
}

export default GetClients