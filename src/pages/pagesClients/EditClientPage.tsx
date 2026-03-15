import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function EditClient() {
    const { id } = useParams()

    const [client, setClient] = useState({
        name:"",
        nickname:"",
        cedula:"",
        address: "",
        phone: "",
        planId:"",
        routerSerial:""
    })

    useEffect(() => {
        fetch(`http://localhost:3000/clients/${id}`)
            .then(res => res.json())
            .then(data => setClient(data)) 
    },[id])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/clients/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
        alert("cliente actualizado")
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input 
            value={client.name}
            onChange={(e) => 
                setClient({...client, name: e.target.value})
            } />

            <input 
            value={client.nickname}
            onChange={(e) =>
                setClient({ ...client, nickname: e.target.value})
            } />

            <input 
            value={client.cedula}
            onChange={(e) => 
                setClient({ ...client, cedula: e.target.value})
            } />

            <input 
            value={client.address}
            onChange={(e) => 
                setClient({ ...client, address: e.target.value })
            } />

            <input 
            value={client.phone}
            onChange={(e) => 
                setClient({ ...client, phone: e.target.value })
            } />

            <input 
            value={client.planId}
            onChange={(e) => 
                setClient({ ...client, planId: e.target.value })
            } />

            <input 
            value={client.routerSerial}
            onChange={(e) =>
                setClient({ ...client, routerSerial: e.target.value })
            } />

            <button type="submit">guardar</button>
        </form>
    )
}
export default EditClient