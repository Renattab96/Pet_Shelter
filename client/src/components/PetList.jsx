import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/App.css'

const PetList = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/obtenerpet', { withCredentials: true })
            .then((res) => {
                console.log(res)
                setLista(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='bg-image'>
            <div className='App contenido'>
                <Navbar />
                <Container>
                    <Row>
                        {
                            lista.map((petname1, indice) => (
                                <Col md={4}>
                                    <div key={indice} className="mascota">
                                        <h2>{petname1.petname1}</h2>
                                        <Link to={`/unpet/${petname1._id}`} className="d-block"> Mas Info </Link>
                                        <img src={petname1.add} className="col col-4" />
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default PetList