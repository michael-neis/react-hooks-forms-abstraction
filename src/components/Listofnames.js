// import { useState } from "react"

function Listofnames({firstName, lastName, admin, handleDelete}){

    return(
        <>
        <h3>{firstName} {lastName} {admin ? "Is Checked" : "Is Not Checked"}
        <br/>
        <button onClick={handleDelete} name={firstName}>Delete</button>
        </h3>
        </>
    )
}

export default Listofnames