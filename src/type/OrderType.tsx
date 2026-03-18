

export type Order = {
    id: string,
    clientId: string,
    status: string,
    createdAt: Date,
    completedAt?: Date
}

export type OrderProps = {
    order: Order
}