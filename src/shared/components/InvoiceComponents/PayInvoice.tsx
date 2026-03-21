import { API_URL } from "../../../api/api"
import type { InvoiceProps } from "../../../type/InvoiceType"



function PayInvoice({invoice}: InvoiceProps) {
    const invoicePay = async (invoiceId: string) => {
        const res = await fetch(`${API_URL}/invoices/${invoiceId}/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!res.ok) {
            alert("Error paying invoice")
            return
        }

        alert("Invoice paid")
        window.location.reload()
    }

    return (
        <>
            <button onClick={() => invoicePay(invoice.id)}>
                Pay
            </button>
        </>
    )
}
export default PayInvoice