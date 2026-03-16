

export type Order = {
    id: string,
    clientId: string,
    status: string,
    createdAt: Date,
}

export type OrderProps = {
    order: Order
}