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
            <h2 className="font-bold text-black dark:text-white m-5">create expense</h2>

            <form onSubmit={handlerSubmit}
            className="flex flex-col text-black px-4 py-4 dark:text-gray-200">
                <h3 className="font-bold pb-2">Type:</h3> 
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="PROVIDER">PROVIDER</option>
                    <option value="MATERIAL">MATERIAL</option>
                    <option value="MAINTENANCE">MAINTENANCE</option>
                </select>

                <h3 className="font-bold pb-2">Description:</h3>
                <input 
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                type="text"
                value={description} 
                onChange={(e) => setDescrption(e.target.value)}/>

                <h3 className="font-bold pb-2">Amount:</h3>
                <input type="number"
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

                <h3 className="font-bold pb-2">Date:</h3>
                <input type="date"
                className="bg-gray-400  w-100 p-0.1 rounded-lg dark:text-black"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            
                <button className="flex font-bold m-6 px-3 py-1 h-9 w-21 rounded text-white  bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}
export default NewExpense