
import type { clientProps } from "../../../type/Client"
function Suspend({ client }: clientProps) {

    const suspendClient = async (id: string) => {
        await fetch(`http://localhost:3000/clients/${id}/suspend`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "suspend"
            })
        })
        alert("cliente suspendido")
    }
    return (
        <>
            <button onClick={() => suspendClient(client.id)}>
                suspender
            </button>
        </>
    )
}

export default Suspend