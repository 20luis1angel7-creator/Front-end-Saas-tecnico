import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Plan } from "../../type/PlansType"


function PlanDetailPage() {
    const { id } = useParams()
    const [plan, setPlan] = useState<Plan | null>(null)

    useEffect(() => {
        const getPlan = async () => {
            const res = await fetch(`http://localhost:3000/${id}`)
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
                </div>
            )}
            
        </>
    )
}
export default PlanDetailPage