import type { ExpenseProps } from "../../../type/ExpenseType"



function DeleteExpense({expense}: ExpenseProps) {

    const deleteE = async (id: string) => {
        try{
            await fetch(`http://localhost:3000/expenses/${id}`, {
                method: "DELETE"
            })
            alert("Expense deleted")
        }catch(e){
            console.log(e)
            alert("error al eliminar expense")
        }
    }

    return (
        <>
            <button onClick={() => deleteE(expense.id)}>
                delete
            </button>
        </>
    )
}
export default DeleteExpense