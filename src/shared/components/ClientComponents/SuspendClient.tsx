
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"
function Suspend({ client }: clientProps) {

    const suspendClient = async (id: string) => {
        const res = await fetch(`${API_URL}/clients/${id}/suspend`, {
            method: "PATCH"
        })
        if (!res.ok) {
            alert("Error suspend client")
            return
        }
        alert("Client suspend")
        window.location.reload()
    }

    return (
        <>
            <button onClick={() => suspendClient(client.id)}
                className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-amber-400">
                suspend
            </button>
        </>
    )
}

export default Suspend