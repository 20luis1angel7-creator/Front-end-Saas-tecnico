
export type OrderMaterialUsed = {
    materialId: string
    materialName: string
    quantity: number
}

export type Order = {
    id: string
    clientId: string
    status: string
    createdAt: Date
    completedAt?: Date
    materialsUsed?: OrderMaterialUsed[]
}

export type OrderProps = {
    order: Order
}