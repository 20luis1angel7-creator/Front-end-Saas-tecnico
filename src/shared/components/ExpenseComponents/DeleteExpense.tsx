import { API_URL } from "../../../api/api"
import type { ExpenseProps } from "../../../type/ExpenseType"



function DeleteExpense({expense}: ExpenseProps) {

    const deleteE = async (id: string) => {
        try{
            const res = await fetch(`${API_URL}/expenses/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) {
                alert("Error al eliminar expense")
                return
            }

            alert("Expense deleted")
            window.location.reload()
        }catch(e){
            console.log(e)
            alert("error al eliminar expense")
        }
    }

    return (
        <>
            <button onClick={() => deleteE(expense.id)}>
                Delete
            </button>
        </>
    )
}
export default DeleteExpense