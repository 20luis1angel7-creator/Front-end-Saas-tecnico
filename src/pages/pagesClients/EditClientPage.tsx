import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../api/api"


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
        const getClient = async () => {
            const res = await fetch(`${API_URL}/clients/${id}`)
            if(!res.ok) {
                alert("Error loading client")
                return
            }
            const data = await res.json()
            setClient(data)
        
        }
        getClient()
    },[id])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/clients/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
        if (!res.ok) {
                alert("error update client")
                return
        }
        alert("Update client")
    }
    // if (!client.name && !client.nickname && !client.cedula) {
    //     return <p>Loading client...</p>
    // }


    return (
        <>
            
            <form onSubmit={handlerSubmit} 
            className="flex flex-col px-4 py-4 text-black dark:text-gray-200">
                <h3>Name:</h3>
                <input 
                className="bg-gray-300 w-full border border-gray-300 dark:text-black"
                value={client.name}
                onChange={(e) => 
                    setClient({...client, name: e.target.value})
                } />

                <h3 className="">Nickname:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.nickname}
                onChange={(e) =>
                    setClient({ ...client, nickname: e.target.value})
                } />

                <h3>Cedula:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.cedula}
                onChange={(e) => 
                    setClient({ ...client, cedula: e.target.value})
                } />

                <h3>Address:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.address}
                onChange={(e) => 
                    setClient({ ...client, address: e.target.value })
                } />

                <h3>Phone:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.phone}
                onChange={(e) => 
                    setClient({ ...client, phone: e.target.value })
                } />

                <h3>Plan:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.planId}
                onChange={(e) => 
                    setClient({ ...client, planId: e.target.value })
                } />

                <h3>Router:</h3>
                <input 
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={client.routerSerial}
                onChange={(e) =>
                    setClient({ ...client, routerSerial: e.target.value })
                } />

                <button type="submit"
                className="flex font-bold m-6 px-3 py-1 h-9 w-24 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}
export default EditClient