import React from 'react'

export const Crear = () => {
  return (
    <div className="add">
              <h3 className="title">Añadir pelicula</h3>
              <form action="">
                  <input type="text" placeholder="titulo"/>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <input type="submit" value="Enviar"/>
              </form>
    </div>
  )
}
