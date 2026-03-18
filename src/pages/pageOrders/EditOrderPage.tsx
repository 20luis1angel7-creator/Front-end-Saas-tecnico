// este codigo pusiblemente sea eliminado






// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"






// function EditOrder() {
//     const { id } = useParams()
//     const [order, setOder] = useState({
//         clientId:"",
//         createdAt:""
//     })

//     useEffect(() => {
//         fetch(`http://localhost:3000/orders/${id}`)
//             .then(res => res.json())
//             .then(data => setOder(data))
//     },[id])

//     const handlerorder = async (e: React.FormEvent) => {
//         e.preventDefault()

//         await fetch(`http://localhost:3000/orders/${id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(order)
//         })

//     }

//     return (
//         <>
//             <h2>update order</h2>

//             <form onSubmit={handlerorder}>
//                 <input
//                 value={order.clientId}
//                 onChange={(e) => 
//                     setOder({ ...order, clientId: e.target.value})
//                 } />

//                 <input 
//                 value={order.createdAt}
//                 onChange={(e) => 
//                     setOder({ ...order, createdAt: e.target.value})
//                 } />

//                 <button>guardar</button>
//             </form>
//         </>
//     )
// }
// export default EditOrder