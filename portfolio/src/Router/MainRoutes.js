import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Portfolio} from '../components/Portfolio'
import { Resume } from '../components/Resume'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'


export const MainRoutes = () => {
  return (

    <BrowserRouter>
    {/* Header and Navigation */}
    <HeaderNav />

    {/* Main Content */}
    <section className='content'>
      <Routes>
          <Route path='/' element={<Navigate to="/inicio"/>}></Route>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/servicios' element={<Services/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </section>

      {/* Header and Navigation */}
      <Footer />
      
    </BrowserRouter>


  )
}
