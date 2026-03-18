import { useEffect, useState } from "react";
import type { Payment } from "../../shared/components/PaymentComponents/PaymentType";
import { useParams } from "react-router-dom";


function InvoicePayment() {

    const { invoiceId } = useParams()
    const [payments, setPayments] = useState<Payment[]>([])

    useEffect(() => {
        const getPayment = async () => {
            const res = await fetch(`http://localhost:3000/payments/invoices/${invoiceId}//payments`)
            const data: Payment[] = await res.json()
            setPayments(data)
        }
        getPayment()
    },[invoiceId])

    return (
        <>
            <h2>Invoice payment</h2>

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