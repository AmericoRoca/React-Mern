import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
  
    /*const getUsuariosAjaxPms = () => {
      fetch("https://reqres.in/api/users?page=2")
        .then(respuesta => respuesta.json())
        .then((resultado_final => {
          setUsuarios(resultado_final.data);
          setIsLoading(false);
        }))
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    }*/

    const getUsuariosAjaxAW = () =>{

        setTimeout(async () =>{
            const peticion = await fetch("https://reqres.in/api/users?page=2");
            const { data } = await peticion.json();
            
            setUsuarios(data);
            setLoading(false);

        }, 2000); 

  
    }
  
    useEffect(() => {
      //getUsuariosAjaxPms();
        getUsuariosAjaxAW(); 
    }, []);
    
    if(loading == true){
         //Cuando esta todo cargando
        return(
            <div>
                Cargando datos...
            </div>
        );

    } else {
        //Cuando todo ha ido bien
        return (
            <div>
            <h2>Listado de usuarios via Ajax</h2>
    
                <ol>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <img src={usuario.avatar} width="80"/>
                        {usuario.first_name} {usuario.last_name}</li>
                ))}
                </ol>
            </div>
        );
    }

   
  
  };