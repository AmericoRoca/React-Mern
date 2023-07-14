import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Error } from '../components/Error'

export const MainRouter = () => {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <NavLink to="/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/articulos">Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
      {/*Cargar componentes */}
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/contact' element={<Contacto/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
  )
}
