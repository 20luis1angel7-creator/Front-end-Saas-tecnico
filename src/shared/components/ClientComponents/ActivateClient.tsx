
import type { clientProps } from "../../../type/Client"

function ActivateClient({client}: clientProps) {

    const activate = async ( id: string) => {
        await fetch(`http://localhost:3000/clients/${id}/activate`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "activate"
            })
        })
        alert("cliente activado")
    }
    return (
        <>
        <button onClick={() => activate(client.id)}>
            activar
        </button>
        </>
    )
}
export default ActivateClient