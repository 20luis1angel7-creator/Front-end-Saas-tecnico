export type Plan = {
    id: string;
    name: string;
    price: number;
    speed: number;
    isActive?: boolean;
    createdAt?: string;
};
export type PlanProps = {
    plan: Plan
}
