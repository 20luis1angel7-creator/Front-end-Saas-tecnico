import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




function EditExpense() {
    const { id } = useParams()

    const [expense, setExpense] = useState({
        description: "",
        amount: 0,
        date: 0
    })

    useEffect(() => {
        fetch(`http://localhost:3000/expenses/${id}`)
            .then(res => res.json())
            .then(data => setExpense(data))
    })

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await fetch(`http://localhost:3000/expenses/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        })
        alert("expense edited")
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input type="text"
                value={expense.description}
                onChange={(e) => 
                    setExpense({ ...expense, description: e.target.value})
                } />

                <input type="number"
                value={expense.amount}
                onChange={(e) => 
                    setExpense({ ...expense, amount: Number(e.target.value)})
                } />

                <input type="date"
                value={expense.date}
                onChange={(e) => 
                    setExpense({ ...expense, date: Number(e.target.value)})
                } />

                <button type="submit">guardar</button>
            </form>
        </>
    )
}
export default EditExpense