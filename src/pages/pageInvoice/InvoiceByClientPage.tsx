import { useEffect, useState } from "react"
import type { Invoice } from "../../type/InvoiceType"
import { useParams } from "react-router-dom"
import  PayInvoice  from "../../shared/components/InvoiceComponents/PayInvoice"


function InvoicePage() {
    const { clientId } = useParams<{ clientId: string}>()
    const [invoices, setInvoice] = useState<Invoice[]>([])

    useEffect(() => {
        const getInvoive = async () => {
            const res = await fetch(`http://localhost:3000/invoices/clients/${clientId}/invoices`)
            const data = await res.json()
            setInvoice(data)
        }
        getInvoive()
    },[clientId])

    return (
        <>
            <h2>Invoice page</h2>

            {invoices.map((invoice) => {
                <div>
                    <h2>{invoice.clientId}</h2>
                    <h2>{invoice.amount}</h2>
                    {/*<h2>{invoice.issueDate}</h2>
                    <h2>{invoice.dueDate}</h2>*/}

                    <PayInvoice invoice={invoice} />
                </div>
            })}            
        </>
    )
}
export default InvoicePage