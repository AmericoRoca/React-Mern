import React from 'react'

export const MiPrimerListado = () => {

    let nombre = "Americo Chiclana";

    const cambiarNombre = (e) =>{
        nombre = "Paco gomez";
    }


  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong>
            {nombre}
        </strong>
        <button className="boton" onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}
