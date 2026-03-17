import { useEffect, useState } from "react"
import type { Material } from "../../type/MaterialType"

function MaterialPage() {
     const [materials, setMaterials] = useState<Material[]>([])

     useEffect(()=> {
        const getMaterial = async () => {
            const res = await fetch(`http://localhost:3000/materials`)
            const data: Material[] = await res.json()
            setMaterials(data)
        }
    getMaterial()
    },[])

    return (
        <>
            <h2>Material page</h2>

            <section>
                {materials.map((material) => (
                    <div key={material.id}>
                        <h3>{material.name}</h3>
                        <h3>{material.stock}</h3>
                        <h3>{material.minStock}</h3>
                        <h3>{material.unitPrice}</h3>
                        <h3>{material.active}</h3>
                    </div>
                ))}
            </section>
        </>
    )
}
export default MaterialPage