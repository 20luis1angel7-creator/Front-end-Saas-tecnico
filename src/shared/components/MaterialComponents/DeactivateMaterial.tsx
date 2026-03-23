import { API_URL } from "../../../api/api"
import type { MaterialProps } from "../../../type/MaterialType"


function Deactivate( {material}: MaterialProps) {

    const handlerDeactivate = async () => {
        const res = await fetch(`${API_URL}/materials/${material.id}/deactivate`, {
            method: "PATCH",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify({
            //     active: true
            // })
        })
        if (!res.ok) {
            alert("Error deactivate")
            return
        }

        alert("Material deactivate")
    }

    return (
        <>

            <button onClick={handlerDeactivate}
            className="mx-5 my-5 w-25 h-9 rounded text-white bg-gray-500 hover:bg-gray-700">
                Deactivate
            </button>
        </>
    )
}
export default Deactivate