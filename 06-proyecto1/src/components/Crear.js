import React, { useState } from 'react'

export const Crear = () => {

    const tituloComponente = "Añadir pelicula";

    const [ peliState, setPeliState ] = useState({
        titulo:'',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault()

        //Conseguir los datos del form
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear Objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //guardar el estado
        setPeliState(peli);

        //guardar en el almacenamiento local
        guardarEnStorage(peli);
        





    }

    const guardarEnStorage = peli => {
        //Conseguir los elementos del localStorage
        let items = JSON.parse(localStorage.getItem("pelis"));

        //Comprobar que sea un array
        if(Array.isArray(items)){
            //añadir un elemento nuevo
            items.push(peli);
        } else {
            //Crear array con nueva peli
            items = [peli];
        }

        //Guardar en el localStorage
        localStorage.setItem("pelis",JSON.stringify(items))

        //Devolver objeto
        return peli;

        console.log(peli)
        
    }

  return (
    <div className="add">
              <h3 className="title">{tituloComponente}</h3>

              <strong>
                {(titulo && descripcion) && "Has creado la pelicula: "+titulo}
              </strong>
                
              <form action="" onSubmit={conseguirDatosForm}>
                  <input 
                    type="text" 
                    name="titulo"
                    placeholder="Titulo"/>
                  <textarea 
                    name="descripcion" 
                    id="descripcion"
                    cols="30" 
                    rows="10">

                    </textarea>
                  <input 
                    type="submit" 
                    value="Enviar"/>
              </form>
    </div>
  )
}
