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
        const res = await fetch(`${API_URL}/materials/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(material)
        })
        if(!res.ok) {
            alert("Error al actualizar material")
            return
        }
        alert("Material actualizado")
    } 

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input type="text"
                value={material.name} 
                onChange={(e) =>
                    setMaterial({ ...material, name: e.target.value})
                }/>

                <input type="number"
                value={material.stock}
                onChange={(e) => 
                    setMaterial({ ...material, stock: Number(e.target.value)})
                } />

                <input type="number"
                value={material.minStock}
                onChange={(e) => 
                    setMaterial({ ...material, minStock: Number(e.target.value)})
                } />

                <input type="number"
                value={material.unitPrice}
                onChange={(e) => 
                    setMaterial({ ...material, unitPrice: Number(e.target.value)})
                } />

                <input type="checkbox"
                checked={material.active}
                onChange={(e) => 
                    setMaterial({ ...material, active: e.target.checked})
                } />

                <button type="submit">
                    Guardar
                </button>
            </form>
        </>
    )
}
export default EditMaterial