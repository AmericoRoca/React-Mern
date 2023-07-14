import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre = "Americo", apellido = "Chiclana"} = useParams();


  return (
    <div>
        <h1>Pagina de persona</h1>
        <h3>{nombre} & {apellido}</h3>
    </div>
    
  )
}
