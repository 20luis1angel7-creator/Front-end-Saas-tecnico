import { useEffect, useState } from "react"


type Client = {
    id: string,
    name: string
    nickname: string,
    cedula: string,
    address: string,
    phone: string,
    planId: string,
    routerSerial?: string
}
function GetClientsByApi() {

    const [clients, setClients] = useState<Client[]>([])

    useEffect(() => {
        const GetClients = async () => {
            try {
            const res = await fetch("http://localhost:3000/clients")
            const data: Client[] = await res.json()
            setClients(data)
            } catch (error) {
                console.log(error)
            }
            
        }

    
        GetClients();
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

export default GetClientsByApi