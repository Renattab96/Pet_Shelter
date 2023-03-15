import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../style/registro.css';

const Registro = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showLabel, setShowLabel] = useState(false);
    const [showLabel2, setShowLabel2] = useState(false);

    const navigate = useNavigate()

    const validatePassword = (e) => e.target.value.length < 8
        ? setShowLabel(true)
        : setShowLabel(false)

    const validateBothPasswords = () => confirmPassword !== password
        ? setShowLabel2(true)
        : setShowLabel2(false)

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/registro', {
            nombre, apellido, email, password, confirmPassword
        }, { withCredentials: true })
            .then((res) => {
                console.log(res)
                navigate('/')
            }).catch((err) => {
                console.log(err)
                alert('Ingrese todos los datos para el registro!!');
            })
    }
    return (
        // <div className='app'></div>
        <div className='bg-image'>

            <header>
                <h2 className="logo" >Pet Shelter</h2>
            </header>
            <div className='form-container'>
                <form onSubmit={submitHandler} className="formclass" action="#" >
                    <div>
                        <p className='regText'> Ya tienes cuenta <Link to='/'><span>  Accede </span></Link></p>
                    </div>
                    <div className='nameDiv'>
                        {/* <label htmlFor=""  className='rlabel'>Nombre:</label> */}
                        <input type="text" className='form-control' onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese su nombre' />
                    </div>
                    <div className='lastnameDiv'>
                        {/* <label htmlFor=""  className='rlabel'>Apellido:</label> */}
                        <input type="text" className='form-control' onChange={(e) => setApellido(e.target.value)} placeholder='Ingrese su Apellido' />
                    </div>
                    <div className='mailDiv'>
                        {/* <label htmlFor="" className='rlabel'>Email:</label> */}
                        <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su email' />
                    </div>
                    <div className='passDiv'>
                        {/* <label htmlFor="" className='rlabel'> Password</label> */}
                        <input type="password" className='form-control' onBlur={validatePassword} onChange={(e) => setPassword(e.target.value)} placeholder='Ingrese su password' />
                    </div>
                    {showLabel === true && (
                        <label htmlFor='passwordmessage' className='text-danger'>*Password should be at least 8 characters</label>
                    )}
                    <div className='passConfirDiv'>
                        {/* <label htmlFor="" className='rlabel'> Confirm Password</label> */}
                        <input type="password" className='form-control' onBlur={validateBothPasswords} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Ingrese nuevamente su password' />
                    </div>
                    {showLabel2 === true && (
                        <label htmlFor='notmatchpassword' className='text-danger'>*Passwords do not match!</label>
                    )}
                    <div className='btnDiv'>
                        <button className='btn-register' > Registrate!!!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro