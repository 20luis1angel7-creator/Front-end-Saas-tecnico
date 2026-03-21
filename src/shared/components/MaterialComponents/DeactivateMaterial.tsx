import type { MaterialProps } from "../../../type/MaterialType"


function Deactivate( {material}: MaterialProps) {

    const handlerDeactivate = async () => {
        const res = await fetch(`http://localhost:3000/materials/${material.id}/deactivate`, {
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

            <button onClick={handlerDeactivate}>
                Deactivate
            </button>
        </>
    )
}
export default Deactivate