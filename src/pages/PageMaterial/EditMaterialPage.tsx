import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api/api";




function EditMaterial() {
    const { id } = useParams()

    const [material, setMaterial] = useState({
        name: "",
        stock: 0,
        minStock: 0,
        unitPrice: 0,
        active: true
    })

    useEffect(() => {
        fetch(`${API_URL}/materials/${id}`)
            .then(res => res.json())
            .then(data => setMaterial(data))
    },[id])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${API_URL}/materials/${id}/update`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(material)
        })
        if (!res.ok) {
            const errorText = await res.text()
            console.log("MATERIAL UPDATE ERROR:", errorText)
            alert("Error loading materials")
            return
        }
        alert("Material actualizado")
    } 

    return (
        <>
            <form onSubmit={handlerSubmit}
            className="flex flex-col px-4 py-4 text-black dark:text-gray-200">
                <h3>Name:</h3>
                <input type="text"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={material.name} 
                onChange={(e) =>
                    setMaterial({ ...material, name: e.target.value})
                }/>

                <h3>Stock:</h3>
                <input type="number"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={material.stock}
                onChange={(e) => 
                    setMaterial({ ...material, stock: Number(e.target.value)})
                } />

                <h3>MinStock:</h3>
                <input type="number"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={material.minStock}
                onChange={(e) => 
                    setMaterial({ ...material, minStock: Number(e.target.value)})
                } />

                <h3>Unit Price:</h3>
                <input type="number"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                value={material.unitPrice}
                onChange={(e) => 
                    setMaterial({ ...material, unitPrice: Number(e.target.value)})
                } />

                <h3>Active:</h3>
                <input type="checkbox"
                className="bg-gray-300 w-100 border border-gray-300 dark:text-black"
                checked={material.active}
                onChange={(e) => 
                    setMaterial({ ...material, active: e.target.checked})
                } />

                <button type="submit"
                className="flex font-bold m-6 px-3 py-1 h-9 w-24 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}
export default EditMaterial