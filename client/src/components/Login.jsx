import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../style/login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, { withCredentials: true })
            .then((res) => {
                navigate('/todospet')
                // console.log(res)
            }).catch((err) => {
                console.log(err)
                alert("Verificar datos ingresados!!")
            })
    }

    return (
        <div className='bg-image'>
            <header>
                <h2 className='logo' >Pet Shelter</h2>
            </header>
            <div className='form-container'>
                <form onSubmit={submitHandler} className="formclass" action="#" >
                    <div className="userDiv">
                        {/* <label htmlFor="" className='flabel'>Email:</label> */}
                        <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder='Introduzca su email' />
                    </div>
                    <div className='passDiv'>
                        <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder='Introduzca su Contrasena' />
                    </div>
                    <div className='btnDiv' >
                        <button>Login</button>
                    </div>
                    <div>
                        <p className='regText'> Aun no tienes cuenta <Link to='/registro'><span> Registrate</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login