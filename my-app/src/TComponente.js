 import React from 'react';
 import PropTypes from 'prop-types';

 
 export const TComponente = ({nombre,apellido,ficha}) => {


   return (
     <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
     </div>
   )
}

TComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string,
    ficha: PropTypes.object
}
 