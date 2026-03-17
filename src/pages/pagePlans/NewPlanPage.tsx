import React, { useState } from "react"


function NewPlan() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState<number>(0)
    const [speed, setSpeed] = useState<number>(0)

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

                <input type="number"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))} />

                <input type="number"
                placeholder="speed"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))} />

                <button>
                    guardar
                </button>
            </form>
        </>
    )
}
export default NewPlan