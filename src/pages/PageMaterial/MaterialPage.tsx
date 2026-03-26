import { useEffect, useState } from "react"
import type { Material } from "../../type/MaterialType"
import { Link } from "react-router-dom"
import { API_URL } from "../../api/api"

function MaterialPage() {
    const [materials, setMaterials] = useState<Material[]>([])

    useEffect(()=> {
        const getMaterial = async () => {
            const res = await fetch(`${API_URL}/materials`)
            if (!res.ok) {
                const errorText = await res.text()
                console.log("MATERIAL LIST ERROR:", errorText)
                alert("Error loading materials")
                return
            }

            const data: Material[] = await res.json()
            console.log("MATERIAL LIST DATA:", data)
            setMaterials(data)
        }
    getMaterial()
    },[])

    return (
        <>
            <h2 className="font-bold text-black dark:text-white">Material page</h2>

            <Link to="/materials/new">
            <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">create material</button>
            </Link>

            <Link to="/materials/purchase">
                <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 ml-2 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">
                    register material purchase
                </button>
            </Link>

            <section className="overflow-x-auto ">
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                        {/* <th className="px-4 py-2">Id</th> */}
                        <th className="px-4 py-2">name</th>
                        <th className="px-4 py-2">stock</th>
                        <th className="px-4 py-2">minStock</th>
                        <th className="px-4 py-2">unitPrice</th>
                        <th className="px-4 py-2">active</th>
                        <th className="px-4 py-2">acciones</th>
                        </tr>
                    </thead>

                     <tbody className="bg-white dark:bg-gray-900">
                        {materials.map((material) => (
                            <tr key={material.id} className="text-black dark:text-white">
                                {/* <td className="px-4 py-2">{material.id}</td> */}
                                <td className="px-4 py-2">{material.name}</td>
                                <td className="px-4 py-2">{material.stock}</td>
                                <td className="px-4 py-2">{material.minStock}</td>
                                <td className="px-4 py-2">{material.unitPrice}</td>
                                <td className="px-4 py-2">{material.active ? "Active" : "Inactive"}</td>

                                <td>
                                    <Link to={`/materials/${material.id}`}>
                                        <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show material</button>
                                    </Link>

                                    <Link to={`/materials/${material.id}/update`}>
                                        <button className="bg-gray-100 border px-2 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">update material</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}
export default MaterialPage