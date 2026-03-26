import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Order } from "../../type/OrderType"
import StartOrder from "../../shared/components/OrderComponent/StartOrder"
import CancelOrder from "../../shared/components/OrderComponent/CancelOrder"
import { API_URL } from "../../api/api"
import Toast from "../../shared/components/ui/Toast"

type Material = {
    id: string
    name: string
    stock: number
    active?: boolean
} 
function OrderDetail() {
    const { id } = useParams()

    const [order, setOrder] = useState<Order | null>(null)
    const [showMaterials, setShowMaterials] = useState(false)
    const [materials, setMaterials] = useState<Material[]>([])
    const [consumption, setConsumption] = useState<Record<string, number>>({})
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } |null>(null)

    useEffect(() => {
        const getOrder = async () => {
            const res = await fetch(`${API_URL}/orders/${id}`)
            if (!res.ok) {
                const errorText = await res.text()
                console.log("ORDER DETAIL ERROR:", errorText)
                alert("error loading order")
                return
            }
            const data = await res.json()
            setOrder(data)
        }

        getOrder()
    }, [id])

    const handleShowCompletePanel = async () => {
        const res = await fetch(`${API_URL}/materials`)
        if (!res.ok) {
            alert("error loading materials")
            return
        }

        const data: Material[] = await res.json()
        setMaterials(data.filter((m) => m.active !== false))
        setShowMaterials(true)
    }

    const handleSaveMaterialUsage = async () => {
    try {
        let saved = false

        for (const material of materials) {
            const quantity = consumption[material.id] || 0

            if (quantity > 0) {
                saved = true

                const res = await fetch(`${API_URL}/orders/${id}/material-usage`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        materialId: material.id,
                        quantity
                    })
                })

                if (!res.ok) {
                    const errorText = await res.text()
                    console.log("SAVE MATERIAL USAGE ERROR:", errorText)
                    setToast({ message: `error saving material usage: ${errorText}`, type: "error" })
                    return
                }
            }
        }

        if (!saved) {
            setToast({ message: "Debes poner al menos una cantidad mayor a 0", type: "error" })
            return
        }

        setToast({ message: "save material usage", type: "success" })
    } catch (e) {
        console.log(e)
        setToast({ message: "error save material usage", type: "error" })
    }
}

const handleConfirmComplete = async () => {
    try {
        const res = await fetch(`${API_URL}/orders/${id}/complete`, {
            method: "PATCH"
        })

        if (!res.ok) {
            const errorText = await res.text()
            console.log("COMPLETE ORDER ERROR:", errorText)
            setToast({ message: `error completing order: ${errorText}`, type: "error" })
            return
        }

        setToast({ message: "order completed", type: "success" })
        setTimeout(() => {
            window.location.reload()
        }, 1200)
        
    } catch (e) {
        console.log(e)
        setToast({ message: "error completeing order", type: "error" })
    }
}

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
            {showMaterials && (
    <div className="border p-4 rounded bg-white text-black">
        <h2>Register material usage</h2>

        {materials.map((material) => (
            <div key={material.id} className="py-2">
                <p>{material.name} - stock: {material.stock}</p>
                <input
                    type="number"
                    min="0"
                    value={consumption[material.id] || 0}
                    onChange={(e) =>
                        setConsumption({
                            ...consumption,
                            [material.id]: Number(e.target.value)
                        })
                    }
                    className="border px-2 py-1"
                />
            </div>
        ))}

        <button
            onClick={handleSaveMaterialUsage}
            className="mx-2 my-2 rounded bg-blue-600 px-4 py-2 text-white"
        >
            Save material usage
        </button>

        <button
            onClick={handleConfirmComplete}
            className="mx-2 my-2 rounded bg-green-600 px-4 py-2 text-white"
        >
            Confirm complete
        </button>

        <button
            onClick={() => setShowMaterials(false)}
            className="mx-2 my-2 rounded bg-red-500 px-4 py-2 text-white"
        >
            Cancel
        </button>
    </div>
)}

          {!showMaterials && (
            <>
                <h1 className="font-bold text-back px-4 py-2 text-black dark:text-white">
                    Orders details
                </h1>

                {!order && <p>Loading...</p>}

                {order && (
                    <div className="font-bold px-4 py-2 text-black dark:text-white">
                        
                        {order.client ? (
    <div className="dark:bg-gray-900 w-100 ps-4 py-2">
        <p>Cedula: {order.client.cedula}</p>
        <p>Name: {order.client.name}</p>
        <p>Address: {order.client.address}</p>
    </div>
) : (
    <h3 className="dark:bg-gray-900 w-100 ps-15">No client info</h3>
)}
                        <h3 className="py-1">Status:</h3>
                        <h3 className="dark:bg-gray-900 w-100 ps-15">{order.status}</h3>

                        <h3 className="py-1">Client:</h3>

                        <h3 className="py-1">create:</h3>
                        <h3 className="dark:bg-gray-900 w-100 ps-15">
                            {new Date(order.createdAt).toLocaleDateString()}
                        </h3>

                        <h3 className="py-1">completed:</h3>
                        <h3 className="dark:bg-gray-900 w-100 ps-15">
                            {order.completedAt
                                ? new Date(order.completedAt).toLocaleDateString()
                                : "sin fecha"}
                        </h3>

                        <h3 className="py-1">Materials used:</h3>

                        {order.materialsUsed && order.materialsUsed.length > 0 ? (
                            <div className="dark:bg-gray-900 w-100 ps-4 py-2">
                                {order.materialsUsed.map((item) => (
                                    <p key={item.materialId}>
                                        {item.materialName} - quantity: {item.quantity}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <h3 className="dark:bg-gray-900 w-100 ps-15">No materials used</h3>
                        )}

                        <div>
                            {order.status === "PENDING" && <StartOrder order={order} />}

                            {order.status === "IN_PROGRESS" && (
                                <button
                                    onClick={handleShowCompletePanel}
                                    className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-green-600"
                                >
                                    Complete
                                </button>
                            )}

                            <CancelOrder order={order} />
                        </div>
                    </div>
                )}
                </>
            )
        }
    </>
    )
}

export default OrderDetail