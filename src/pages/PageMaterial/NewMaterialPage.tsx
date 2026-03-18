import React, { useState } from "react"


function NewMaterial() {

    const [name, setName] = useState("")
    const [stock, setStock] = useState(0)
    const [minStock, setMinStock] = useState(0)
    const [unitPrice, setUnitPrice] = useState(0)
    const [active, setActive] = useState(true)

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/materials`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                stock: stock,
                minStock: minStock,
                unitPrice: unitPrice,
                active: active
            })
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <>

            <h2>create material</h2>

            <form onChange={handlerSubmit}>
                <input type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input type="text"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))} />

                <input type="text"
                placeholder="minStock"
                value={minStock}
                onChange={(e) => setMinStock(Number(e.target.value))} />

                <input type="text"
                placeholder="unitPrice"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))} />

                <input type="boolean"
                placeholder="active" 
                onChange={(e) => setActive(Boolean(e.target.value))} />

                <button>guardar</button>
            </form>
        </>
    )
}
export default NewMaterial