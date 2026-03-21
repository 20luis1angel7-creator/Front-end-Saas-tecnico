import { useEffect, useState } from "react";
import type { Payment } from "../../type/PaymentType";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api/api";


function InvoicePayment() {

    const { invoiceId } = useParams()
    const [payments, setPayments] = useState<Payment[]>([])

    useEffect(() => {
        const getPayment = async () => {
            const res = await fetch(`${API_URL}/payments/invoices/${invoiceId}`)
            if (!res.ok) {
                alert("error loading payment")
                return
            }
            const data: Payment[] = await res.json()
            setPayments(data)
        }
        getPayment()
    },[invoiceId])

    return (
        <>
            <h2>Invoice payment</h2>

            {payments.length === 0 && <p>No hay pagos</p>}

            {payments.map((payment) => (
                <div key={payment.id}>
                    <h2>{payment.clientId}</h2>
                    <p>{payment.amount}</p>
                    {/*<p>{payment.paymentDate}</p>
                    <p>{payment.createdAt}</p>*/}
                </div>
            ))}
        </>
    )
}
export default InvoicePayment