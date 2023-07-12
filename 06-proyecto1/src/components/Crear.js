import React, { useState } from 'react'
import { guardarEnStorage } from '../helper/guardarEnStorage';

export const Crear = ({setListadoState}) => {

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

        //actualizar estado del listado principal
        setListadoState(items =>{
          return[peli, ...items];
        })

        //guardar en el almacenamiento local
        guardarEnStorage("pelis", peli);

        
        
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
                    value="Guardar"/>
              </form>
    </div>
  )
}
