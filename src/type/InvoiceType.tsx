

export type Invoice = {
    id: string,
    clientId: string,
    amount: number,
    issueDate: Date,
    dueDate: Date
}

export type InvoiceProps = {
    invoice: Invoice
}