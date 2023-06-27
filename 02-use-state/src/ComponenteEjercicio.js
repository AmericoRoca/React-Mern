import React from 'react'
import { useState } from 'react';

export const ComponenteEjercicio = ({ año }) => {



    const añoAP = (e, estado) => {

        console.log("Funcionando en estado: "+estado);

        if (estado == 1){
           let añoAnterior = año--;
           return año;
            console.log("Funcionando estado 1")
            console.log(año)
       
        } else {
           let añoProximo = año++;
            console.log("Funcionando estado 0")
            console.log(año)
        }
    }

    

  return (
    <div>
        <h1>Ejercicio 1</h1>
        <h3>Año Actual: {año}</h3>
        <button onClick={ e => añoAP(e, 1)}>Año anterior</button>
        <br/>
        <button onClick={ e => añoAP(e, 0)}>Año proximo</button>
        <br/>
        <input type="text" placeholder="introduce año"/>
    </div>
  )
}
