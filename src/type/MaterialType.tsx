
export type Material = {
    id: string;
    name: string;
    stock: number;
    minStock: number;
    unitPrice: number;
    active: boolean
}

export type MaterialProps = {
    material: Material
}