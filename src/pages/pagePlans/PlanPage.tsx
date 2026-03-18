import { useEffect, useState } from "react"
import type { Plan } from "../../type/PlansType"
import { Link } from "react-router-dom"


function PlanPage() {


    const [plans, setPlans] = useState<Plan[]>([])

    const companyId = "1"
    useEffect(() => {
        const getPlans = async () => {
            try {
                const res = await fetch(`http://localhost:3000/plans/${companyId}`)/*hay que arreglarlo  */
                const data: Plan[] = await res.json()
                setPlans(data)
            } catch (e) {
                console.error(e)
            }
        }
        getPlans()
    },[])
    return (
        <>
            <h2>plan page</h2>

            <Link to="/plans/new">
                <button>create plan</button>
            </Link>

            <section>
                {plans.map((plan) => (
                    <div key={plan.id}>
                        <h2>{plan.companyId}</h2>
                        <p>{plan.name}</p>
                        <h2>{plan.price}</h2>
                        <h2>{plan.speed}</h2>
                        <h2>{plan.isActive}</h2>


                        <Link to={`/plans/${plan.id}`}>
                            <button>show plan</button>
                        </Link>

                        <Link to={`/plans/${plan.id}/update`}>
                            <button>edit plan</button>
                        </Link>
                    </div>
                ))}
            </section>

        </>
    )
}
export default PlanPage