import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre} = useParams();

    

  return (
    <div>
        <h1>Pagina de persona</h1>
        <h3>{nombre}</h3>
    </div>
    
  )
}
