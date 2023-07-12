import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        //Conseguir el target del evento
        let target = e.target;

        //Buscar el objeto de la peli a actualizar
        let peliculas_almacenadas = conseguirPeliculas();

        const index = peliculas_almacenadas.findIndex(peli => peli.id === id);

        //crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //actualizar el elemento con el indice
        peliculas_almacenadas[index] = peli_actualizada;

        //guardar el nuevo array de objetos
        localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

        //actualizar estados    
        setListadoState(peliculas_almacenadas);
        setEditar(0);
    }


  return (
    <div className='edit_form'>
        <h3 className="title">{titulo_componente}</h3>
        <form onSubmit={ e =>  guardarEdicion(e, peli.id)}>
            <input 
                type="text" 
                name='titulo'
                className='titulo_editado'
                defaultValue={peli.titulo}/>
            <textarea 
                name="descripcion"
                defaultValue={peli.descripcion}
                className='descripcion_editada'/>
            <input 
                type="submit"
                value="Actualizar"
            />
        </form>
    </div>
  )
}
