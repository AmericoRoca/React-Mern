import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {


  const [editar, setEditar] = useState(0);

 
  useEffect(()=>{
    conseguirPeliculas();
  }, []);


  const conseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {
      //conseguir peliculas almacenadas
      let pelisAlmacenadas = conseguirPeliculas();

      //filtar las peliculas para eliminar la que no quiero
      let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

      console.log(pelisAlmacenadas)
      console.log(nuevoArrayPeliculas)
      //Actualizar estado del listado
      setListadoState(nuevoArrayPeliculas);

      //actualizar los datos en el localStorage
      localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas))
  }

  
  return (
    <>
    {listadoState != null ? listadoState.map(peli => {
      return(
        <article className="peli-item" key={peli.id}>
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit" onClick={ () => {setEditar(peli.id)}}>Edit</button>
                    <button className="delete" onClick={ () => borrarPeli(peli.id)}>Remove</button>

                    {/*aparece formulario de editar*/}
                    {editar == peli.id && (
                      <Editar 
                        peli={peli}
                        conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar}
                        setListadoState={setListadoState}/>
                    )}

                </article>
      );
    }) : <h2>No hay peliculas para mostrar</h2>}
                
    </>
  )
}
