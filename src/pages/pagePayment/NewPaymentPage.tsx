import React, { useState } from "react";



function NewPayment() {
    const [clientId, setClientId] = useState("")
    const [invoiceId, setInvoiceId] = useState("")
    const [amount, setAmount] = useState(0)
    const [paymentDate, setPaymentDate] = useState(Date())
    const [createdAt, setCreatedAt] = useState(Date())

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:3000/payments/pay`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                clientId: clientId,
                invoiceId: invoiceId,
                amount: amount,
                paymentDate: paymentDate,
                createdAt: createdAt
            })
        })
        const data = res.json()
        console.log(data)
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

                <input type="text"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)} />

                <input type="text"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)} />

            </form>
        </>
    )
}
export default NewPayment