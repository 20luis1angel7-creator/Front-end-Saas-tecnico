
import { API_URL } from "../../../api/api"
import type { clientProps } from "../../../type/Client"


function EliminarClient({client}: clientProps) {

    const eliminar = async ( id: string) => {
        try {
            const res = await fetch(`${API_URL}/clients/${id}`, {
                method: "DELETE"
            })
            if (!res.ok) {
                alert("Error delete client")
                return
            }
            alert("Client delete")
            window.location.reload()
        } catch (e) {
            console.error(e)
            alert("Error al eliminar cliente")
        }
    }
    return (
        <>
            <button onClick={() => eliminar(client.id)} 
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-red-400">
                Delete
            </button>
        </>
    )
}
export default EliminarClient