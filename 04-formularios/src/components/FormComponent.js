import React, { useState } from 'react'
import '../App.css'

export const FormComponent = () => {

    const [usuario, setUsuario] = useState();
    const [exist, setExist] = useState(false);

    const conseguirDatosForm = e =>{
        e.preventDefault();


        let datos = e.target;
        console.log(datos.nombre.value);


        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        }
        console.log(usuario)

        setUsuario(usuario);
        setExist(true)
    }

    if(exist){
        return(
            <div>
                {usuario.nombre}
                {usuario.apellido}
                {usuario.bio}
            </div>
        )
    }

  return (
    <div>
        <h1>Formulario con React</h1>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" placeholder='nombre' name='nombre'/>
            <input type="text" placeholder='apellido' name='apellido'/>
            <select name="genero">
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea name="bio"></textarea>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
