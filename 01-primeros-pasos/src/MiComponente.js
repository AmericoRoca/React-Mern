//import
import React from "react";

//funcion del componente
const MiComponente = () =>{

    const nombre = "Americo";
    const web = "americoroca.com";

    let usuario = {
        nombre: "Americo",
        apellido: "Chiclana"
    }   

    return (
        <div>
            <p>Este es mi primer componente</p>
            <h3>Nombre: {nombre}</h3>
            <h3>Apellido: {usuario.apellido}</h3>
        </div>
    )
}


//export
export default MiComponente;