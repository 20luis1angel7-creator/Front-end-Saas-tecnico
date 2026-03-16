import React, { useState } from "react"


function NewPlan() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [speed, setSpeed] = useState("")

    const createPlan = async (e: React.FormEvent) => {
        e.preventDefault()

        
        const res = await fetch("http://localhost:3000/plans", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: name,
                price: price,
                speed: speed
            })
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <>
            <h2>create new plan</h2>
            <form onSubmit={createPlan}>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />

                <input type="text"
                placeholder="speed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)} />
            </form>
        </>
    )
}
export default NewPlan