import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/Panel/InicioPanel'
import { Crear } from '../components/Panel/Crear'
import { Gestion } from '../components/Panel/Gestion'
import { Acerca } from '../components/Panel/Acerca'

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
          <li>
            <NavLink 
              to="/panel"
              className={({isActive}) => isActive ? "activado" : ""}
            >Panel</NavLink>
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
            <Route path='/panel' element={<PanelControl/>}>
                <Route path='inicio' element={<InicioPanel/>}/>
                <Route path='crear' element={<Crear/>}/>
                <Route path='gestion' element={<Gestion/>}/>
                <Route path='acerca' element={<Acerca/>}/>
            </Route>
            <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
  )
}
