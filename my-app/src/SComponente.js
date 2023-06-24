import React from 'react'

export const SComponente = () => {

    const libros = ["Harry Potter", "Clean", "otro"];

    return (
      
      <div className='segundoComponente'>
          <h1>Listado de libros</h1>
          {libros.length >= 1 ?  (
            <ul>
                <li>
                    { 
                    
                      libros.map((libro, indice) => {

                        return <li key={indice}>{libro}</li>;
                        
                      })
                    }
                </li>
            </ul>)
            : (<p>No hay libros</p>)
          } 

      </div>
    )
}
