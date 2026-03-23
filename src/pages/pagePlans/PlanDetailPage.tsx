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
            <h1 className="font-bold px-4 py-2 text-black dark:text-white">Plan details</h1>
            {/* <h2 className="font-bold px-4 py-2 text-black dark:text-white">Plan {id}</h2> */}
            
            {!plan && <p>Cargando plan...</p>}

            {plan && (
                <div className="font-bold px-4 py-2 text-black dark:text-white"> 
                    <h3 className="py-1">Name plan:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{plan.name}</h3>
                    <h3 className="py-1">Price:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{plan.price}</h3>
                    <h3 className="py-1">Speed:</h3>
                    <h3 className="dark:bg-gray-900 w-100 ps-15">{plan.speed}</h3>

                    <div className="">
                        <DeletePlan plan={plan} />
                    </div>
                </div>
            )}
            
        </>
    )
}
export default PlanDetailPage