import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
        <h1 className=''> Pet Shelter 😺🐶</h1> <br>
        
        </br>

        <NavLink to="/todospet"> Pagina de inicio  🏠</NavLink>  &nbsp; &nbsp;
        <NavLink to="/nuevopet"> Agregar Mascota 🐹 </NavLink>&nbsp;&nbsp;
        <NavLink to="http://localhost:8000/api/logout">  Salir 🔒</NavLink>
    </div>
  )
}

export default Navbar