import React from 'react'

export const Eventos = () => {

    const hasDadoClick = (e, nombre) =>{
        alert("Hola soy un evento click"+nombre);
    }

  return (
    <div>
        <h1>Eventos</h1>
        {/*Evento click*/}
        <button onClick={e => hasDadoClick(e,"Victor") }>Click</button>
    </div>
  )
}
