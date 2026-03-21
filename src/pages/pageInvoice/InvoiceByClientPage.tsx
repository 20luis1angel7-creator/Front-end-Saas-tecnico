import { useEffect, useState } from "react"
import type { Invoice } from "../../type/InvoiceType"
import { useParams } from "react-router-dom"
import  PayInvoice  from "../../shared/components/InvoiceComponents/PayInvoice"
import { API_URL } from "../../api/api"


function InvoicePage() {
    const { clientId } = useParams<{ clientId: string}>()
    const [invoices, setInvoice] = useState<Invoice[]>([])

    useEffect(() => {
        const getInvoice = async () => {
            const res = await fetch(`${API_URL}/invoices/clients/${clientId}`)
            if (!res.ok) {
                alert("error loading invoice")
                return
            }
            const data = await res.json()
            setInvoice(data)
        }
        getInvoice()
    },[clientId])

    return (
        <>
            <h2>Invoice page</h2>

            {/* {invoices.length === 0 && <p>No hay invoices</p>} */}
            
            {invoices.map((invoice) => (
                <div key={invoice.id}>
                    <h2>{invoice.clientId}</h2>
                    <h2>{invoice.amount}</h2>
                    {/*<h2>{invoice.issueDate}</h2>
                    <h2>{invoice.dueDate}</h2>*/}

                    <PayInvoice invoice={invoice} />
                </div>
            ))}            
        </>
    )
}
export default InvoicePage