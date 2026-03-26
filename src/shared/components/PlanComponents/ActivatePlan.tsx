import { API_URL } from "../../../api/api"
import type { Plan } from "../../../type/PlansType"
import Toast from "../ui/Toast"
import { useState } from "react"

interface PlanButtonProps {
    plan: Plan
}

function ActivatePlan({ plan }: PlanButtonProps) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
    
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

            setToast({ message: "Plan activate", type: "success" })
            window.location.reload()
        } catch (e) {
            console.log(e)
            setToast({ message: "Error activate plan", type: "error" })
        }
    }

    return (
        <>
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast(null)}
            />
        )}
        <button
            onClick={() => planActivate(plan.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-blue-600 hover:bg-blue-700"
        >
            Activate
        </button>
        </>
    )
}

export default ActivatePlan