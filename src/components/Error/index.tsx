import React from "react";

const Error = (navigate) => {
    return ( 
        <div>
            <p>Hubo un error, porfavor vuelve a intentarlo</p>
            <button onClick={navigate}>Volver a intentarlo</button>
        </div>
     )
}

export default Error;