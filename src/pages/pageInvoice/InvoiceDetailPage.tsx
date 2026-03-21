import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Invoice } from "../../type/InvoiceType"
import { API_URL } from "../../api/api"


function InvoiceDetail() {
    const { invoiceId } = useParams<{invoiceId: string}>()
    const [invoice, setInvoice] = useState<Invoice | null>(null)

    useEffect(() => {
        const getInvoice = async () => {
            const res = await fetch(`${API_URL}/invoices/${invoiceId}`)
            if (!res.ok) {
                alert("error loading invoice")
                return
            }
            const data = await res.json()
            setInvoice(data)
        }
        getInvoice()
    },[invoiceId])

    return (
        <>
            <h2>Page invoice</h2>

            {!invoice && <p>Cargando invoice...</p>}
            
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