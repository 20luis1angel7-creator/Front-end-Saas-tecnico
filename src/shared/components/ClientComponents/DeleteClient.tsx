
import type { clientProps } from "../../../type/Client"


function EliminarClient({client}: clientProps) {

    const eliminar = async ( id: string) => {
        try {
            await fetch(`http://localhost:3000/clients/${id}`, {
                method: "DELETE"
            })
            alert("Cliente eliminado")
        } catch (e) {
            console.error(e)
            alert("Error al eliminar cliente")
        }
    }
    return (
        <>
            <button onClick={() => eliminar(client.id)}>
                eliminar
            </button>
        </>
    )
}
export default EliminarClient