import { API_URL } from "../../../api/api";
import type { PlanProps } from "../../../type/PlansType";



function DeletePlan( {plan}: PlanProps ) {
    const planDelete = async (id: string) => {
        try {
            const res =await fetch(`${API_URL}/plans/${id}/deactivate`,{
                method: "PATCH"
            })
            if (!res.ok) {
                const errorText = await res.text()
                console.log("PLAN DEACTIVATE ERROR:", errorText)
                alert("Error deactivate plan")
                return
            }
            alert("Plan deactivate")
            window.location.reload()
        } catch (e) {
            console.log(e)
            alert("Error al deactivate plan")
        }
    }

    return (
        <>
            <button onClick={() => planDelete(plan.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-red-400">
                deactivate
            </button>
        </>
    )
}
export default DeletePlan