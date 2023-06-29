import React, { useEffect, useState } from 'react';
import '../App.css'
import { AvisoCompont } from './AvisoCompont';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Americo Chiclana");
    const [fecha, setFecha] = useState("29-10-1991")
    const [contador, setContador] = useState(0);

    const modUsuario = e =>{
        setUsuario(e.target.value);

        console.log("Ha habido un cambio en usuario");
    }

    //Con corchetes solo se ejecuta una vez
    useEffect(() =>{
        console.log("Has realizado un cambio")
    });

    //Se ejecuta solo si cambia el usuario
    useEffect(() =>{
        console.log("Has realizado un cambio")
        setContador(contador+1);
        console.log("Has cambiado: "+contador)
    
    }, [fecha, usuario]);

    const cambiarFecha = e =>{
        setFecha(new Date().toLocaleDateString());
    }


  return (
    <div>
        <h1>Efecto use effect</h1>
        <strong className={ contador >= 10 ? "label label-green" : "label" }>{ usuario }</strong>
        <strong className='label'>{ fecha }</strong>
        <p>
            
            <input type='text' onChange={ modUsuario } placeholder='Cambiar nombre usuario'/>

            <button onClick={ cambiarFecha }>Cambiar Fecha</button>
        </p>

        { usuario == "Americo" && <AvisoCompont/> }
    </div>
  )
}
