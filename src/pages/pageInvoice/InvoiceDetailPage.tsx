import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Invoice } from "../../type/InvoiceType"


function InvoiceDetail() {
    const { invoiceId } = useParams<{invoiceId: string}>()
    const [invoice, setInvoice] = useState<Invoice | null>(null)

    useEffect(() => {
        const getinvoice = async () => {
            const res = await fetch(`http://localhost:3000/invoice/${invoiceId}`)
            const date = await res.json()
            setInvoice(date)
        }
        getinvoice()
    },[invoiceId])

    return (
        <>
            {invoice && (
                <div key={invoice.id}>
                    <h2>{invoice.clientId}</h2>
                    <h2>{invoice.amount}</h2>
                    {/*<h2>{invoice.issueDate}</h2>
                    <h2>{invoice.dueDate}</h2>*/}
                </div>
            )}
        </>
    )
}
export default InvoiceDetail