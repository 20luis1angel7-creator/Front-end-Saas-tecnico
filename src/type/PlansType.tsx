export type Plan = {
    id: string;
    companyId: string;
    name: string;
    price: number;
    speed: number;
    isActive?: boolean;
    createdAt?: Date;
};
export type PlanProps = {
    plan: Plan
}
