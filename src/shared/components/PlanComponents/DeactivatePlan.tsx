import { API_URL } from "../../../api/api";
import type { PlanProps } from "../../../type/PlansType";
import { useState } from "react";
import Toast from "../ui/Toast";

function DeactivatePlan( {plan}: PlanProps ) {
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
        
    const planDeactivate = async (id: string) => {
        try {
            const res =await fetch(`${API_URL}/plans/${id}/deactivate`,{
                method: "PATCH"
            })
            if (!res.ok) {
                const errorText = await res.text()
                console.log("PLAN DEACTIVATE ERROR:", errorText)
                setToast({ message: "Error deactivate plan", type: "error" })
                return
            }
            setToast({ message: "Plan deactivate", type: "success" })
            window.location.reload()
        } catch (e) {
            console.log(e)
            alert("Error al deactivate plan")
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
            <button onClick={() => planDeactivate(plan.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-red-400">
                deactivate
            </button>
        </>
    )
}
export default DeactivatePlan