import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Elige diferentes opciones</h1>
        <nav>
            <ul>
                <li>
                <NavLink 
                    to="inicio" 
                    className={({isActive}) => isActive ? "activado" : ""}
                >Inicio</NavLink>
                </li>
                <li>
                <NavLink 
                    to="crear" 
                    className={({isActive}) => isActive ? "activado" : ""}
                >Crear</NavLink>
                </li>
                <li>
                <NavLink 
                    to="gestion" 
                    className={({isActive}) => isActive ? "activado" : ""}
                >Gestion</NavLink>
                </li>
                <li>
                <NavLink 
                    to="acerca" 
                    className={({isActive}) => isActive ? "activado" : ""}
                >Acerca</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Quiero cargar aquí los componentes de las subrutas */}
            <Outlet/>
        </div>
        
    </div>
  )
}
