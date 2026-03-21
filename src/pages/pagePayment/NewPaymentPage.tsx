import React, { useState } from "react";
import { API_URL } from "../../api/api";



function NewPayment() {
    const [clientId, setClientId] = useState("")
    const [invoiceId, setInvoiceId] = useState("")
    const [amount, setAmount] = useState(0)
    const [paymentDate, setPaymentDate] = useState("")

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/payments/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                clientId: clientId,
                invoiceId: invoiceId,
                amount: amount,
                paymentDate: paymentDate
            })
        })
        if (!res.ok) {
            alert("error create payment")
            return
        }
        alert("Create payment")
        await res.json()
        
    }

    return (
        <>
            <h2>create payment</h2>

            <form onSubmit={handlerSubmit}>
                <input type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)} />

                <input type="text"
                value={invoiceId}
                onChange={(e) => setInvoiceId(e.target.value)} />

                <input type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} />

                <input type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)} />

                {/* <input type="text"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)} /> */}

                <button>guardar</button>
            </form>
        </>
    )
}
export default NewPayment