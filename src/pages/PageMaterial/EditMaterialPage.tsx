import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function EditMaterial() {
    const { id } = useParams()

    const [materials, setMaterials] = useState({
        name: "",
        stock: 0,
        minStock: 0,
        unitPrice: 0,
        active: true
    })

    useEffect(() => {
        fetch(`http://localhost:3000/materials/${id}`)
            .then(res => res.json())
            .then(data => setMaterials(data))
    })

    const handlerSubmit = async () => {
        fetch(`http://localhost:3000/materials/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(materials)
        })
    } 

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input type="text"
                value={materials.name} 
                onChange={(e) =>
                    setMaterials({ ...materials, name: e.target.value})
                }/>

                <input type="number"
                value={materials.stock}
                onChange={(e) => 
                    setMaterials({ ...materials, stock: Number(e.target.value)})
                } />

                <input type="number"
                value={materials.minStock}
                onChange={(e) => 
                    setMaterials({ ...materials, minStock: Number(e.target.value)})
                } />

                <input type="number"
                value={materials.unitPrice}
                onChange={(e) => 
                    setMaterials({ ...materials, unitPrice: Number(e.target.value)})
                } />

                {/*<input type="text"
                value={materials.active}
                onChange={(e) => 
                    setMaterials({ ...materials, active: e.target.value})
                } />*/}
            </form>
        </>
    )
}
export default EditMaterial