import React, { useRef } from 'react'

export const Form = () => {

    const nombre = useRef();
    const apellido = useRef();
    const email = useRef();
    const miCaja = useRef();

    const mostrar = (e) => {
        e.preventDefault();

        console.log(nombre.current.value)
        console.log(apellido.current.value)
        console.log(email.current.value)

        let { current: caja } = miCaja;
        //mi caja
        console.log(miCaja)
        caja.classList.add("cambio-caja")
        caja.innerHTML = "Formulario enviado"
    }

  return (
    <div>

        <div ref={miCaja} className='mi-caja'>
            <h2>Pruebas con useRef</h2>
        </div>
        <form onSubmit={mostrar}>
            <input type='text' placeholder='nombre' ref={nombre}/><br/>
            <input type='text' placeholder='apellidos' ref={apellido}/><br/>
            <input type='email' placeholder='email' ref={email}/><br/>
            <input type='submit' placeholder='Enviar'/>
        </form>
    </div>
  )
}
