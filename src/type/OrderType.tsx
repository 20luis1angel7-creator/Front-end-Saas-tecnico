
export type OrderMaterialUsed = {
    materialId: string
    materialName: string
    quantity: number
}

export type OrderClient = {
    cedula: string
    name: string
    address: string
}

export type Order = {
    id: string
    clientId: string
    status: string
    createdAt: Date
    completedAt?: Date
    client?: OrderClient | null
    materialsUsed?: OrderMaterialUsed[]
}

export type OrderProps = {
    order: Order
}