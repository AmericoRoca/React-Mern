import React from 'react'
import { Link } from 'react-router-dom'


export const Error = () => {
  return (
    <div>
      <h1>Error, path not founded</h1>
      <Link to="/inicio">Volver al inicio</Link>
    </div>
  )
}
