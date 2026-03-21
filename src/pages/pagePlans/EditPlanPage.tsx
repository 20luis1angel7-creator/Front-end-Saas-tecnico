import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../api/api"




function EditPlan() {
    const { id } = useParams()

    const [plan, setPlan] = useState({
        name:"",
        price:0,
        speed:0
    })

    useEffect(() => {
        fetch(`${API_URL}/plans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    },[id])

    const editPlan = async (e: React.FormEvent) => {
        e.preventDefault()

        
        const res = await fetch(`${API_URL}/plans/${id}/update`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
        if (!res.ok) {
                alert("error update plan")
                return
        }
        alert("Update plan")
    }

    return (
        <>
            <form onSubmit={editPlan}
            className="flex flex-col px-4 py-4 text-black dark:text-gray-200">
                <h3>Name:</h3>
                <input
                className="bg-gray-300 py- w-100 border border-gray-300 dark:text-black"
                value={plan.name}
                onChange={(e) => 
                    setPlan({ ...plan, name: e.target.value })
                } />

                <h3 className="">Price:</h3>
                <input 
                className="bg-gray-300 py- w-100 border border-gray-300 dark:text-black"
                type="number"
                value={plan.price}
                onChange={(e) => 
                    setPlan({ ...plan, price: Number(e.target.value) })
                } />

                <h3 className="">Speed:</h3>
                <input 
                className="bg-gray-300 py- w-100 border border-gray-300 dark:text-black"
                type="number"
                value={plan.speed}
                onChange={(e) => 
                    setPlan({ ...plan, speed: Number(e.target.value)})
                } />
                
                <button className="flex font-bold m-6 px-3 py-1 h-9 w-21 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    guardar
                </button>
            </form>
        </>
    )

}
export default EditPlan