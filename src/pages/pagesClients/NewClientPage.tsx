import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import Toast from "../../shared/components/ui/Toast";

type Plan = {
    id: string
    name: string
    isActive: boolean
}

function NewClientPage() {
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [cedula, setCedula] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [planId, setPlanId] = useState("")
    const [routerSerial, setRouterSerial] = useState("")
    const [plans, setPlans] = useState<Plan[]>([])
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
   

    useEffect(() => {
        const getPlans = async () => {
            const res = await fetch(`${API_URL}/plans`)
            if (!res.ok) {
                alert("Error loading plans")
                return
            }

            const data: Plan[] = await res.json()
            setPlans(data.filter((plan) => plan.isActive))
        }

        getPlans()
    }, [])

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/clients`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                nickname: nickname,
                cedula: cedula,
                address: address,
                phone: phone,
                planId: planId,
                routerSerial: routerSerial
            })
        })

        if (!res.ok) {
            setToast({ message: "Error creating client", type: "error" })
            return
        }

        await res.json()
        setToast({ message: "Client created", type: "success" })

        setName("")
        setNickname("")
        setCedula("")
        setAddress("")
        setPhone("")
        setPlanId("")
        setRouterSerial("")
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
            <h1 className="font-bold text-black dark:text-white m-5">Hello here create client</h1>

            <form
                onSubmit={handlerSubmit}
                className="flex flex-col text-black px-4 py-4 dark:text-gray-200"
            >
                <h3 className="font-bold pb-2">Name:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <h3 className="font-bold pb-2">Nickname:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />

                <h3 className="font-bold pb-2">Cedula:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="cedula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                />

                <h3 className="font-bold pb-2">Address:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <h3 className="font-bold pb-2">Phone:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <h3 className="font-bold pb-2">Plan:</h3>
                <select
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    value={planId}
                    onChange={(e) => setPlanId(e.target.value)}
                >
                    <option value="">Select a plan</option>
                    {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                            {plan.name}
                        </option>
                    ))}
                </select>

                <h3 className="font-bold pb-2">Router:</h3>
                <input
                    className="bg-gray-400 w-100 p-0.1 rounded-lg dark:text-black"
                    type="text"
                    placeholder="router"
                    value={routerSerial}
                    onChange={(e) => setRouterSerial(e.target.value)}
                />

                <button className="flex font-bold m-6 px-3 py-1 h-9 w-21 rounded text-white bg-gray-700 dark:bg-blue-700">
                    Save
                </button>
            </form>
        </>
    )
}

export default NewClientPage