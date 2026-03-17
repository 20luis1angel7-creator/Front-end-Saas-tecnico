import type { MaterialProps } from "../../../type/MaterialType"


function Deactivate( {material}: MaterialProps) {

    const handlerDeactivate = async () => {
        await fetch(`http://localhost:3000/materials${material.id}/Deactivate`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                active: true
            })
        })
    }

    return (
        <>

            <button onClick={handlerDeactivate}>
                guardar
            </button>
        </>
    )
}
export default Deactivate