import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Material } from "../../type/MaterialType"
import Deactivate from "../../shared/components/MaterialComponents/DeactivateMaterial"
import { API_URL } from "../../api/api"

function MaterialDetail() {

    const { id } = useParams()
    const [material, setMaterial] = useState<Material | null>(null)

    useEffect(() => {
        const getMaterial = async () => {
            const res = await fetch(`${API_URL}/materials/${id}`)
            if (!res.ok) {
                alert("Error loading material")
                return
            }

            const data = await res.json()
            setMaterial(data)
        }
        getMaterial()
    },[id])

    return ( 
        <>
            <h2>detail materials</h2>
            <h2>material id: {id}</h2>

            {!material && <p>Cargando material...</p>}

            {material && (
                <div>
                    <h3>{material.name}</h3>
                    <h3>{material.stock}</h3>
                    <h3>{material.minStock}</h3>
                    <h3>{material.unitPrice}</h3>
                    <h3>{material.active ? "Active" : "Deactive"}</h3>
                    
                    <Deactivate  material={material}/>
                    
                </div>
            )}
        </>
    )
}
export default MaterialDetail