import type { PlanProps } from "../../../type/PlansType";



function DeletePlan( {plan}: PlanProps ) {
    const planDelete = async (id: string) => {
        try {
            await fetch(`http://localhost:3000/plans/${id}`,{
                method: "DELETE"
            })
            alert("Plan delete")
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