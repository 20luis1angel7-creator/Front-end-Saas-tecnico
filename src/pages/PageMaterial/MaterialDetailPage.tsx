import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Material } from "../../type/MaterialType"
import Deactivate from "../../shared/components/MaterialComponents/DeactivateMaterial"

function MaterialDetail() {

    const { id } = useParams()
    const [materials, setMaterials] = useState<Material | null>(null)

    useEffect(() => {
        const getMaterial = async () => {
            const res = await fetch(`http://localhost:3000/materials/${id}`)
            const data = await res.json()
            setMaterials(data)
        }
        getMaterial()
    },[id])

    return ( 
        <>
            <h2>detail materials</h2>
            <h2>material id: ${id}</h2>

            {materials && (
                <div>
                    <h3>{materials.name}</h3>
                    <h3>{materials.stock}</h3>
                    <h3>{materials.minStock}</h3>
                    <h3>{materials.unitPrice}</h3>
                    {/*<h3>{materials.active}</h3>*/}
                    <Deactivate  material={materials}/>
                    
                </div>
            )}
        </>
    )
}
export default MaterialDetail