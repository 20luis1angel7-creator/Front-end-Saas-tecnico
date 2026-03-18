import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




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
        fetch(`http://localhost:3000/materials/${id}`)
            .then(res => res.json())
            .then(data => setMaterial(data))
    },[id])

    const handlerSubmit = async () => {
        fetch(`http://localhost:3000/materials/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(material)
        })
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

                <input type="text"
                onChange={(e) => 
                    setMaterial({ ...material, active: Boolean(e.target.value)})
                } />
            </form>
        </>
    )
}
export default EditMaterial