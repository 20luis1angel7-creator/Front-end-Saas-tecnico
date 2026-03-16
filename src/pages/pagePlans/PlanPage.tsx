import { useEffect, useState } from "react"
import type { Plan } from "../../type/PlansType"
// import type { PlanProps } from "../../type/PlansType"


function PlanPage() {

    const [plan, setPlan] = useState<Plan[]>([])

    useEffect(() => {
        const getPlans = async () => {
            try {
                const res = await fetch("http://localhost:3000/plans")
                const data: Plan[] = await res.json()
                setPlan(data)
            } catch (e) {
                console.error(e)
            }
        }
        getPlans()
    },[])
    return (
        <>
            <h2>plan page</h2>

            <section>
                {plan.map((plan) => (
                    <div key={plan.id}>
                        <h2>{plan.companyId}</h2>
                        <p>{plan.name}</p>
                        <h2>{plan.price}</h2>
                        <h2>{plan.speed}</h2>
                        <h2>{plan.isActive}</h2>
                    </div>
                ))}
            </section>

        </>
    )
}
export default PlanPage