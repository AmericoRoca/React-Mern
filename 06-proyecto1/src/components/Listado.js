import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

 
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
                    <button className="edit">Edit</button>
                    <button className="delete" onClick={ () => borrarPeli(peli.id)}>Remove</button>
                </article>
      );
    }) : <h2>No hay peliculas para mostrar</h2>}
                
    </>
  )
}
