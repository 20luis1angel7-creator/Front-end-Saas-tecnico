import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




function EditPlan() {
    const { id } = useParams()

    const [plan, setPlan] = useState({
        name:"",
        price: "",
        speed:""
    })

    useEffect(() => {
        fetch(`http://localhost:3000/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    },[id])

    const editPlan = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
    }

    return (
        <>
            <form onChange={editPlan}>
                <input
                value={plan.name}
                onChange={(e) => 
                    setPlan({ ...plan, name: e.target.value})
                } />

                <input 
                value={plan.price}
                onChange={(e) => 
                    setPlan({ ...plan, price: e.target.value})
                } />

                <input
                value={plan.speed}
                onChange={(e) => 
                    setPlan({ ...plan, speed: e.target.value})
                } />
            </form>
        </>
    )

}
export default EditPlan