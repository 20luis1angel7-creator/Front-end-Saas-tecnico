import { useEffect, useState } from "react"
import type { Plan } from "../../type/PlansType"
import { Link } from "react-router-dom"
import { API_URL } from "../../api/api"


function PlanPage() {


    const [plans, setPlans] = useState<Plan[]>([])

    const companyId = "1"
    useEffect(() => {
        const getPlans = async () => {
            try {
                const res = await fetch(`${API_URL}/plans/company/${companyId}`)/*hay que arreglarlo  */
                if (!res.ok) {
                    alert("error loading plan")
                    return
                }
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
            <h2 className="font-bold text-black px-4 py-2 dark:text-white">Plan page</h2>

            <Link to="/plans/new">
                <button className="bg-gray-700 text-white rounded px-4 py-2 my-5 hover:bg-gray-600 dark:bg-blue-700 dark:hover:text-gray-200">create plan</button>
            </Link>

            <section className="overflow-x-auto ">
                <table className="min-w-full text-sm text-left text-gray-300 border border-gray-700 dark:text-gray-200 ">
                    <thead className="bg-gray-400 text-black uppercase text-xs dark:bg-gray-800 dark:text-gray-300">
                        <tr>
                            {/*<th className="px-4 py-2">id</th>*/}
                            <th className="px-4 py-2">name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Speed</th>
                            <th className="px-4 py-2">Active</th>
                            <th className="px-4 py-2">Created</th>
                            <th className="px-4 py-2">acciones</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white dark:bg-gray-900">
                        {plans.map((plan) => (
                            <tr key={plan.id} className="border-b text-black border-gray-700 hover:bg-gray-100  dark:text-white dark:hover:bg-gray-800">
                                <td className="px-4 py-2">{plan.name}</td>
                                <td className="px-4 py-2">{plan.price}</td>
                                <td className="px-4 py-2">{plan.speed}</td>
                                <td className="px-4 py-2">{plan.isActive}</td>
                                <td className="px-4 py-2">{plan.createdAt ? new Date(plan.createdAt).toLocaleDateString() : "sin fecha"}</td>

                                <td className="px-4 py-2 space-x-2">
                                <Link to={`/plans/${plan.id}`}>
                                    <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">show plan</button>
                                </Link>

                                <Link to={`/plans/${plan.id}/edit`}>
                                    <button className="bg-gray-100 border px-4 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-blue-700">edit plan</button>
                                </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </>
    )
}
export default PlanPage