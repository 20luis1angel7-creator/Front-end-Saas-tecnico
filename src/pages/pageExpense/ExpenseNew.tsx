import React, {useState } from "react";
import { API_URL } from "../../api/api";




function NewExpense() {

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
                description: "",
                amount: 0,
                date: 0
            })
        })
        if (!res.ok) {
                alert("error ctreated expense")
                return
        }
        alert("Create expense")
        await res.json()
    }

    return (
        <>
            <h2>create expense</h2>
            <form onSubmit={handlerSubmit}>
                <input 
                type="text"
                value={description} 
                onChange={(e) => setDescrption(e.target.value)}/>

                <input type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

                <input type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            
                <button>Save</button>
            </form>
        </>
    )
}
export default NewExpense