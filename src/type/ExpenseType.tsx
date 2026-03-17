
export type ExpenseType = 
| "EMPLOYEE"
| "PROCIDER"
| "MATERIAL"
| "MAINTENANCE"

export type Expense = {
    id: string,
    companyId: string;
    type: ExpenseType;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
}

export type ExpenseProps = {
    expense: Expense
}