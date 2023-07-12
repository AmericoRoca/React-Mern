import React, { useEffect, useState } from 'react'

export const Listado = () => {

  const [listadoState, setListadoState ] = useState([]);
  
  useEffect(()=>{
    conseguirPeliculas();
  }, []);


  const conseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    setListadoState(peliculas);
  }


  
  return (
    <>
    {listadoState != null ? listadoState.map(peli => {
      return(
        <article className="peli-item" key={peli.id}>
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit">Edit</button>
                    <button className="delete">Remove</button>
                </article>
      );
    }) : <h2>No hay peliculas para mostrar</h2>}
                
    </>
  )
}
