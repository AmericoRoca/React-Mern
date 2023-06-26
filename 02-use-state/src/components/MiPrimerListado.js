import React from 'react'
import { useState } from 'react';

export const MiPrimerListado = () => {

    /* Problematica

    let nombre = "Americo Chiclana";

    const cambiarNombre = (e) =>{
        nombre = "Paco gomez";
    }*/

    const [nombre, setNombre] = useState("Americo Chiclana");

    const cambiarNombre = e =>{
        setNombre("Paco gomez");
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
