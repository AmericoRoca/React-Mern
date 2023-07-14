import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    const {nombre = "Americo", apellido = "Chiclana"} = useParams();

    const navegar = useNavigate();


    const enviar = (e) =>{
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/persona/${nombre}/${apellido}`;

        if(nombre.length <= 0 && apellido.length <= 0){
            navegar("/inicio")
        } else {
            navegar(url);
        }
        
    };


  return (
    <div>
        <h1>Pagina de persona</h1>
        <h3>{nombre} & {apellido}</h3>

        <form onSubmit={enviar}>
            <input type='text' name='nombre'></input>
            <input type='text' name='apellido'></input>
            <input type='submit' value="enviar" name='enviar'></input>
        </form>
    </div>
    
  )
}
