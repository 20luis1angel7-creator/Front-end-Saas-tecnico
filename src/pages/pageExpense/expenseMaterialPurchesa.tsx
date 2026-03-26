import React, { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import Toast from "../../shared/components/ui/Toast";

type Material = {
    id: string
    name: string
    active?: boolean
}

function RegisterMaterialPurchasePage() {
    const [materialId, setMaterialId] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [materials, setMaterials] = useState<Material[]>([]);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
    useEffect(() => {
        const getMaterials = async () => {
            const res = await fetch(`${API_URL}/materials`);

            if (!res.ok) {
                alert("error loading materials");
                return;
            }

            const data: Material[] = await res.json();
            setMaterials(data.filter((material) => material.active !== false));
        };

        getMaterials();
    }, []);

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch(`${API_URL}/expenses/material-purchase`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                materialId,
                quantity,
                description
            })
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.log("REGISTER MATERIAL PURCHASE ERROR:", errorText);
            setToast({ message: "error register material purchase", type: "error" })
            return;
        }

        setToast({ message: "Register material purchase", type: "success" })
        setMaterialId("");
        setQuantity(0);
        setDescription("");
    };

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
            <h2 className="font-bold text-black dark:text-white m-5">register material purchase</h2>

            <form
                onSubmit={handlerSubmit}
                className="flex flex-col text-black px-4 py-4 dark:text-gray-200"
            >
                <h3 className="font-bold pb-2">Material:</h3>
                <select
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                >
                    <option value="">Select material</option>
                    {materials.map((material) => (
                        <option key={material.id} value={material.id}>
                            {material.name}
                        </option>
                    ))}
                </select>

                <h3 className="font-bold pb-2">Quantity:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />

                <h3 className="font-bold pb-2">Description:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className="flex font-bold m-6 px-3 py-1 h-9 w-52 rounded text-white bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    );
}

export default RegisterMaterialPurchasePage;