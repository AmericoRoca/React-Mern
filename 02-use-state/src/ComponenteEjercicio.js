import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ComponenteEjercicio = ({ año }) => {

  const [añoActual, setAñoActual] = useState(año);

  const cambiarAño = (e, estado) => {
    console.log("Funcionando en estado: " + estado);

    if (estado === 1) {
      setAñoActual(añoActual - 1);
      console.log("Funcionando estado 1");
    } else {
      setAñoActual(añoActual + 1);
      console.log("Funcionando estado 0");
    }
  }

  const cambiarAñoInput = (e, añoActual) =>{
    setAñoActual(añoActual)
  }

  

  return (
    <div>
      <h1>Ejercicio 1</h1>
      <h3>Año Actual: {añoActual}</h3>
      <button onClick={(e) => cambiarAño(e, 1)}>Año anterior</button>
      <br />
      <button onClick={(e) => cambiarAño(e, 0)}>Año próximo</button>
      <br />
      <input type="text" placeholder="Introduce año" onKeyUp={ e => cambiarAñoInput(e, e.target.value)}/>
    </div>
  );
}


ComponenteEjercicio.propTypes = {
  año: PropTypes.number.isRequired,

}

