import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false); 

  const buscarPeli = (e) =>{
    //crear estado y actualizarlo
    setBusqueda(e.target.value);

    //filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    });

    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false)
    }

    //comprobar resultado
    setListadoState(pelis_encontradas);
   

    //actualizar estado del listado principal


  }
  return (
        <div className="search">
            <h3>Buscador: {busqueda}</h3>
            {(noEncontrado == true && busqueda.length > 1) && (
               <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
           
            <form>
                <input 
                  type="text"
                  name="busqueda"
                  autoComplete='off'
                  onChange={buscarPeli}/>
                <button>Buscar</button>
            </form>
        </div>

  )
}
