import type { InvoiceProps } from "../../../type/InvoiceType"



function PayInvoice({invoice}: InvoiceProps) {
    const invoicePay = async (invoiceId: string) => {
        await fetch(`http://localhost:3000/invoices/${invoiceId}/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        alert("invoice paid")
    }

    return (
        <>
            <button onClick={() => invoicePay(invoice.id)}>
                pagar
            </button>
        </>
    )
}
export default PayInvoice