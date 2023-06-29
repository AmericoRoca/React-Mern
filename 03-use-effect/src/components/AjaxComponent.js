import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {
    
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const getUsuariosAjaxPms = () => {
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
    }
  
    useEffect(() => {
      getUsuariosAjaxPms();
    }, []);
  
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        {isLoading ? (
          <p>Cargando usuarios...</p>
        ) : (
          <ol>
            {usuarios.map(usuario => (
              <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
            ))}
          </ol>
        )}
      </div>
    );
  };