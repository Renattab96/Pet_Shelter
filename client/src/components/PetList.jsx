import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PetList = () => {
    const [lista, setLista] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/obtenerpet', {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <div className='d-flex flex-wrap mt-5'>
        {
            lista.map((petname1, indice)=>(
                <div key={indice}>
                <h2>{petname1.pettype}</h2>
                <Link to={`/unpet/${petname1._id}`} className="d-block"> Mas Info </Link>
                <img src={petname1.add} className="col col-4"/>
                </div>
            ))
        }

    </div>
  )
}

export default PetList