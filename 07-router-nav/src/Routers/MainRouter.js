import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'

export const MainRouter = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink 
              to="/inicio" 
              className={({isActive}) => isActive ? "activado" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink 
              to="/articulos"
              className={({isActive}) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({isActive}) => isActive ? "activado" : ""}
            >Contacto</NavLink>
          </li>
          <li>
            <NavLink 
              to="/persona"
              className={({isActive}) => isActive ? "activado" : ""}
            >Persona</NavLink>
          </li>
        </ul>
      </nav>
      {/*Cargar componentes */}
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/contact' element={<Contacto/>}/>
            <Route path='/persona/:nombre/:apellido' element={<Persona/>}/>
            <Route path='/persona/:nombre' element={<Persona/>}/>
            <Route path="/redirigir" element={<Navigate to="/persona/americo/chiclana"/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
  )
}
