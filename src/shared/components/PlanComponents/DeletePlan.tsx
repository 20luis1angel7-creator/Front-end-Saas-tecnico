import { API_URL } from "../../../api/api";
import type { PlanProps } from "../../../type/PlansType";



function DeletePlan( {plan}: PlanProps ) {
    const planDelete = async (id: string) => {
        try {
            const res =await fetch(`${API_URL}/plans/${id}`,{
                method: "DELETE"
            })
            if (!res.ok) {
                alert("Error delete plan")
                return
            }
            alert("Plan delete")
            window.location.reload()
        } catch (e) {
            console.log(e)
            alert("Error al eliminar plan")
        }
    }

    return (
        <>
            <button onClick={() => planDelete(plan.id)}>
                delete
            </button>
        </>
    )
}
export default DeletePlan