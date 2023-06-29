import React, { useEffect } from 'react'

export const AvisoCompont = () => {

    useEffect(()=>{
        //Se detecta cuando el componente se monta y se ejecuta solo una vez con []
        alert("El componente aviso alert esta montando")

        //Cuando el componente se desmonta
        return () =>{
            alert("Componente desmontado")
        }
    }, [])

  return (
    <div>
        <h1>Hola!</h1>
        <button onClick={ e=> {
            alert("Bienvenido!")
        }}>Mostrar alerta</button>
    </div>
  )
}
