
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
    id: string;
    clientId: string;
    status: "PENDING" | "IN_PROGRESS" | "CANCELLED" | "COMPLETED";
    type: "INSTALLATION" | "AVERIA";
    createdAt: string;
    completedAt: string | null;
    client?: {
        cedula: string;
        name: string;
        address: string;
    } | null;
    materialsUsed?: {
        materialId: string;
        materialName: string;
        quantity: number;
    }[];
};

export type OrderProps = {
    order: Order
}