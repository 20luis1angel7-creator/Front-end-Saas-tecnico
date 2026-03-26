import React, { useState } from "react"
import { API_URL } from "../../api/api"
import Toast from "../../shared/components/ui/Toast"

function NewPlan() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState<number>(0)
    const [speed, setSpeed] = useState<number>(0)
    // const [created, setCreated] = useState<Date>(new Date())
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    const createPlan = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/plans`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                name: name,
                price: price,
                speed: speed,
                // created: created
            })
        })
        if (!res.ok) {
                setToast({ message: "Error create plan", type: "error" })
                return
        }
        setToast({ message: "Create plan", type: "success" })
        await res.json()

    }

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
            <h2 className="font-bold text-black dark:text-white m-5">create new plan</h2>
            <form onSubmit={createPlan}className="flex flex-col text-black px-4 py-4 dark:text-gray-200">
                <h3 className="font-bold pb-2">Nickname:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <h3 className="font-bold pb-2">Price:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                type="number"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))} />

                <h3 className="font-bold pb-2">Speed:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                type="number"
                placeholder="speed"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))} />

                {/* <h3 className="font-bold pb-2">Created:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                type="text"
                placeholder="created"
                onChange={(e) => setCreated(new Date(e.target.value))} /> */}

                <button className="flex font-bold m-6 px-3 py-1 h-9 w-21 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}
export default NewPlan