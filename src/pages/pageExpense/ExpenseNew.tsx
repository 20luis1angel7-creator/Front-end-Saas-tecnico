import React, {useState } from "react";




function NewExpense() {

    const [description, setDescrption] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(0)

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:3000/expenses`, {
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
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
            <h2>create expense</h2>
            <section onSubmit={handlerSubmit}>
                <input 
                type="text"
                value={description} 
                onChange={(e) => setDescrption(e.target.value)}/>

                <input type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

                <input type="number"
                value={date}
                onChange={(e) => setDate(Number(e.target.value))} />
            </section>
        </>
    )
}
export default NewExpense