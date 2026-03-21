import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../api/api"




function EditExpense() {
    const { id } = useParams()

    const [expense, setExpense] = useState({
        description: "",
        amount: 0,
        date: ""
    })

    useEffect(() => {
        fetch(`${API_URL}/expenses/${id}`)
            .then(res => res.json())
            .then(data => setExpense(data))
    },[id])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/expenses/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        })
        if (!res.ok) {
                alert("error update client")
                return
        }
        alert("Update client")
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

                <input type="text"
                value={expense.date}
                onChange={(e) => 
                    setExpense({ ...expense, date: e.target.value})
                } />

                <button type="submit">guardar</button>
            </form>
        </>
    )
}
export default EditExpense