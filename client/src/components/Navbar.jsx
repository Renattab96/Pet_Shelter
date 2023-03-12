import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    axios.get('http://localhost:8000/api/logout', {withCredentials:true})
    .then((res)=>{
      navigate('/') 
      
      return res.status(200)
    // console.log(res)
  })
    .catch((err)=>{
      // console.log(err)
      return err.status(400)
    })
    navigate('/')
  }

  return (
    <div className=''>
        <Link to="/todospet"> Pagina de inicio  🏠</Link>  &nbsp; &nbsp;
        <Link to="/nuevopet"> Agregar Mascota 🐹 </Link>&nbsp;&nbsp;
        <Link to="/" onClick={handleLogout}>  Salir 🔒</Link>
    </div>
  ) 
}

export default Navbar