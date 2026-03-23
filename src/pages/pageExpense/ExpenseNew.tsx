import React, {useState } from "react";
import { API_URL } from "../../api/api";




function NewExpense() {

    const [type, setType] = useState("EMPLOYEE")
    const [description, setDescrption] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/expenses`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                type,
                description,
                amount,
                date,
                createdAt: new Date().toISOString()
            })
        })
        if (!res.ok) {
                alert("error ctreated expense")
                return
        }
        alert("Create expense")
    }

    return (
        <>
            <h2>create expense</h2>
            <form onSubmit={handlerSubmit}>

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="PROVIDER">PROVIDER</option>
                    <option value="MATERIAL">MATERIAL</option>
                    <option value="MAINTENANCE">MAINTENANCE</option>
                </select>

                <input 
                type="text"
                value={description} 
                onChange={(e) => setDescrption(e.target.value)}/>

                <input type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

                <input type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            
                <button>Save</button>
            </form>
        </>
    )
}
export default NewExpense