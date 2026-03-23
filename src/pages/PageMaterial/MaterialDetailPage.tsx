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
                const errorText = await res.text()
                console.log("MATERIAL DETAIL ERROR:", errorText)
                alert("Error loading materials")
                return
            }

            const data = await res.json()
            console.log("MATERIAL LIST DATA:", data)
            setMaterial(data)
        }
        getMaterial()
    },[id])

    return ( 
        <>
            <h2 className="font-bold px-4 py-2 text-black dark:text-white">detail materials</h2>
            {/* <h2>material id: {id}</h2> */}

            {!material && <p>Cargando material...</p>}

            {material && (
                <div className="font-bold px-4 py-2 text-black dark:text-white">
                    <h3 className="py-1">Name:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{material.name}</h3>
                    <h3 className="py-1">Stock:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{material.stock}</h3>
                    <h3 className="py-1">MinStock:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{material.minStock}</h3>
                    <h3 className="py-1">Unit Price:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{material.unitPrice}</h3>
                    <h3 className="py-1">Active:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{material.active ? "Active" : "Deactive"}</h3>
                    
                    <div className="py-5">
                        <Deactivate  material={material}/>
                    </div>
                    
                </div>
            )}
        </>
    )
}
export default MaterialDetail