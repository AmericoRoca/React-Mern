import React from 'react'

export const Eventos = () => {

    const hasDadoClick = (e, nombre) =>{
        alert("Hola soy un evento click"+nombre);
    }

    const dobleClick = (e) =>{
        alert("Hola soy un evento doble Click");
    }

    const hasEntrado = (e, accion) =>{
      alert("Has"+accion+ "a la caja");
    }


  return (
    <div>
        <h1>Eventos</h1>
        <h2>Click</h2>
        {/*Evento click*/}
        <button onClick={e => hasDadoClick(e,"Victor") }>Click</button>
        <hr/>
        {/*Evento dobleclick*/}
        <button onDoubleClick={ dobleClick }>Doble Click</button>

        <div id="caja" onMouseEnter={ e => hasEntrado(e, "entrado")} onMouseLeave={ e => hasEntrado(e, "salido")}>
          {/*entrar y salir raton*/}
          Pasa por encima
        </div>
    </div> 
  )
}
