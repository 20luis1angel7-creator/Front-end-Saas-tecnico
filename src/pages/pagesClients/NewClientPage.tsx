import { useState } from "react";

function NewClientPage() {
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [cedula, setCedula] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [planId, setPlanId] = useState("")
    const [routerSerial, setRouterSerial] = useState("")

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch("http://localhost:3000/clients", {
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
        const data = await res.json()
        console.log(data)
    }
    return (
        <>
            <h1>hola aqui se crea el cliente</h1>

            <form onSubmit={handlerSubmit}>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input 
                type="text"
                placeholder="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)} />

                <input 
                type="text"
                placeholder="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)} />

                <input 
                type="text"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />

                <input 
                type="text"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />

                <input 
                type="text"
                placeholder="plan"
                value={planId}
                onChange={(e) => setPlanId(e.target.value)} />

                <input 
                type="text"
                placeholder="router"
                value={routerSerial}
                onChange={(e) => setRouterSerial(e.target.value)} />

                <button>
                    guardar
                </button>
            </form>
        </>
    )
}

export default NewClientPage