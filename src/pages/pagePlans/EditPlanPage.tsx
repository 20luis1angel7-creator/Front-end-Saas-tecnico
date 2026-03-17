import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




function EditPlan() {
    const { id } = useParams()

    const [plan, setPlan] = useState({
        name:"",
        price:0,
        speed:0
    })

    useEffect(() => {
        fetch(`http://localhost:3000/plans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    },[id])

    const editPlan = async (e: React.FormEvent) => {
        e.preventDefault()

        
        await fetch(`http://localhost:3000/plans/${id}/update`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
    }

    return (
        <>
            <form onSubmit={editPlan}>
                <input
                value={plan.name}
                onChange={(e) => 
                    setPlan({ ...plan, name: e.target.value })
                } />

                <input 
                type="number"
                value={plan.price}
                onChange={(e) => 
                    setPlan({ ...plan, price: Number(e.target.value) })
                } />

                <input
                type="number"
                value={plan.speed}
                onChange={(e) => 
                    setPlan({ ...plan, speed: Number(e.target.value)})
                } />
                
                <button>guardar</button>
            </form>
        </>
    )

}
export default EditPlan