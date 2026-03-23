import React, { useState } from "react"
import { API_URL } from "../../api/api"


function NewMaterial() {

    const [name, setName] = useState("")
    const [stock, setStock] = useState(0)
    const [minStock, setMinStock] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [active, setActive] = useState(true)

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${API_URL}/materials`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                stock,
                minStock,
                unitPrice,
                active
            })
        })
        if (!res.ok) {
            alert("error create material")
            return
        }
        alert("Create material")
        await res.json()
        
    }

    return (
        <>

            <h2 className="font-bold text-black dark:text-white m-5">create material</h2>

            <form onSubmit={handlerSubmit}
            className="flex flex-col text-black px-4 py-4 dark:text-gray-200">
                <h3 className="font-bold pb-2">Name:</h3> 
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                 <h3 className="font-bold pb-2">Nickname:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))} />

                 <h3 className="font-bold pb-2">Nickname:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                placeholder="minStock"
                value={minStock}
                onChange={(e) => setMinStock(Number(e.target.value))} />

                 <h3 className="font-bold pb-2">Nickname:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                placeholder="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))} />

                
                <label>
                    Active
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                    />
                </label>

                <button className="flex font-bold m-6 px-3 py-1 h-9 w-21 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}
export default NewMaterial