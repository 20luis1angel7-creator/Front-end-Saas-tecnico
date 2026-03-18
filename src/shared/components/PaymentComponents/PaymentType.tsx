

export type Payment = {
    id: string,
    clientId: string,
    amount: number,
    paymentDate: Date,
    createdAt: Date
}

export type PaymentProps ={
    payment: Payment
}