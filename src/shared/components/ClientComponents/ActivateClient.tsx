
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"

function ActivateClient({client}: clientProps) {

    const activate = async ( id: string) => {
        const res = await fetch(`${API_URL}/clients/${id}/activate`,{
            method: "PATCH"
        })
        if (!res.ok) {
            alert("Error ativate client")
            return
        }
        alert("Client activate")
        window.location.reload()
        
    }

    return (
        <>
        <button onClick={() => activate(client.id)}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-green-400">
            activate
        </button>
        </>
    )
}
export default ActivateClient