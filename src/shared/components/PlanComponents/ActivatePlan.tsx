import { API_URL } from "../../../api/api"
import type { Plan } from "../../../type/PlansType"

interface PlanButtonProps {
    plan: Plan
}

function ActivatePlan({ plan }: PlanButtonProps) {
    const planActivate = async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/plans/${id}/activate`, {
                method: "PATCH"
            })

            if (!res.ok) {
                const errorText = await res.text()
                console.log("PLAN ACTIVATE ERROR:", errorText)
                alert("Error activate plan")
                return
            }

            alert("Plan activate")
            window.location.reload()
        } catch (e) {
            console.log(e)
            alert("Error activate plan")
        }
    }

    return (
        <button
            onClick={() => planActivate(plan.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-blue-600 hover:bg-blue-700"
        >
            Activate
        </button>
    )
}

export default ActivatePlan