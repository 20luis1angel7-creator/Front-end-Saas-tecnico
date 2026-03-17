import React, { useState } from "react"


function NewOrder() {

    const [clientId, setClientId] = useState("")
    const [createdAt, setCreatedAt] = useState(Date)

    const orderNew = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:3000/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                clientId: clientId,
                createdAt: createdAt
            })
        })
        const data = await res.json()
        console.log(data)
        alert("created order")
    }

    return (
        <>
            <h2>create order</h2>
            <form onSubmit={orderNew}>
                <input type="text"
                placeholder="clientId"
                value={clientId}
                onChange={(e) => 
                    setClientId(e.target.value)
                } />

                <input type="text"
                placeholder="created"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)} />
            </form>

            <button>guardar</button>
        </>
    )
}
export default NewOrder