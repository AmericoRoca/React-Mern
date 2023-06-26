import React from 'react'
import { useState } from 'react';

export const MiPrimerListado = () => {

    /* Problematica

    let nombre = "Americo Chiclana";

    const cambiarNombre = (e) =>{
        nombre = "Paco gomez";
    }*/

    const [nombre, setNombre] = useState("Americo Chiclana");

    const cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong>
            {nombre}
        </strong>
        <button className="boton" onClick={ e => cambiarNombre(e,"Julian") }>Cambiar nombre</button>
        <input className="input" type='text' placeholder='cambiar nombre' onKeyUp={ e => cambiarNombre(e, e.target.value)}/>
    </div>
  )
}
