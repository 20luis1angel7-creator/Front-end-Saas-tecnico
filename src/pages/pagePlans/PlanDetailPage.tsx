import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Plan } from "../../type/PlansType"
import DeletePlan from "../../shared/components/PlanComponents/DeletePlan"
import { API_URL } from "../../api/api"


function PlanDetailPage() {
    const { id } = useParams()
    const [plan, setPlan] = useState<Plan | null>(null)

    useEffect(() => {
        const getPlan = async () => {
            const res = await fetch(`${API_URL}/plans/${id}`)
            if (!res.ok) {
                const errorText = await res.text()
                console.log("PLAN DETAIL ERROR:", errorText)
                alert("error loading plan")
                return
            }
            const data = await res.json()
            setPlan(data)
        }
    getPlan()
    },[id])
    console.log(id)

    return (
        <>
            <h1>Plan details</h1>
            <h2>Plan {id}</h2>
            
            {plan && (
                <div>
                    <h2>{plan.name}</h2>
                    <p>{plan.price}</p>
                    <p>{plan.speed}</p>

                    <DeletePlan plan={plan} />
                </div>
            )}
            
        </>
    )
}
export default PlanDetailPage