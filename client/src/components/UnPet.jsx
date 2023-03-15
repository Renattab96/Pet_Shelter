import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// import Pet from '../../../server/models/pet.model'
import Navbar from '../components/Navbar'
import '../style/App.css'
const UnaSerie = () => {
    // edicion de objeto-documento
    const [pet, setPet] = useState({})

    // obtener id de url
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/obtenerunpet/${id}`)
            .then((res) => {
                setPet(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/borrarpet/${id}`)
            .then((res) => {
                navigate('/todospet')
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='bg-image'>
            <div className='app contenido'>
                <Navbar />
                <img src={pet.add} className="col col-4 mx-auto" />
                <h3>Detalles de la mascota</h3>
                <p> Nombre de la mascota : {pet.petname1}</p>
                <p> Tipo: {pet.pettype}</p>
                <p> Descripción : {pet.petdescription}</p>
                <p> Habilidad 1: {pet.skill1}</p>
                <p> Habilidad 2: {pet.skill2}</p>
                <p> Habilidad 3: {pet.skill3}</p>
                <h3>3 like(s)</h3>
                <button className='likebtn' id="like">Like</button>
                <Link to={`/editarpet/${id}`}> Editar Pet</Link>
                <button className="btn btn-danger" onClick={deleteHandler}>Delete Pet</button>
            </div>
        </div>
    )
}

export default UnaSerie
