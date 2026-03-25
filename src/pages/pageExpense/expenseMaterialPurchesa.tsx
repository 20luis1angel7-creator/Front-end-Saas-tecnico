import React, { useState } from "react";
import { API_URL } from "../../api/api";

function RegisterMaterialPurchasePage() {
    const [materialId, setMaterialId] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");

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
            alert("error register material purchase");
            return;
        }

        alert("Register material purchase");
    };

    return (
        <>
            <h2 className="font-bold text-black dark:text-white m-5">register material purchase</h2>

            <form
                onSubmit={handlerSubmit}
                className="flex flex-col text-black px-4 py-4 dark:text-gray-200"
            >
                <h3 className="font-bold pb-2">Material Id:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                />

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