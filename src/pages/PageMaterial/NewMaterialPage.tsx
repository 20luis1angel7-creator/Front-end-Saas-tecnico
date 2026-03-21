import React, { useState } from "react"
import { API_URL } from "../../api/api"


function NewMaterial() {

    const [name, setName] = useState("")
    const [stock, setStock] = useState(0)
    const [minStock, setMinStock] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [active, setActive] = useState(true)

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${API_URL}/materials`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                stock,
                minStock,
                unitPrice,
                active
            })
        })
        if (!res.ok) {
            alert("error create material")
            return
        }
        alert("Create material")
        await res.json()
        
    }

    return (
        <>

            <h2>create material</h2>

            <form onSubmit={handlerSubmit}>
                <input type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input type="number"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))} />

                <input type="number"
                placeholder="minStock"
                value={minStock}
                onChange={(e) => setMinStock(Number(e.target.value))} />

                <input type="number"
                placeholder="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))} />

                
                <label>
                    Active
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                    />
                </label>

                <button>guardar</button>
            </form>
        </>
    )
}
export default NewMaterial