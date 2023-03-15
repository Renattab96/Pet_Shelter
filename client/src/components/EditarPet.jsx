import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import'../style/App.css'


const EditarPet= () => {
    const [petname1, setName1] = useState('')
    const [pettype, setType] = useState('')
    const [petdescription, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [add, setAdd] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})
  useEffect(() => {
        axios.get(`http://localhost:8000/api/obtenerunpet/${id}`)
        .then((res)=>{
            console.log(res)
            setName1(res.data.petname1)
            setType(res.data.pettype)
            setDescription(res.data.petdescription)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
            setAdd(res.data.add)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editarpet/${id}`, {
            petname1 ,
            pettype,
            petdescription,
            skill1,
            skill2,
            skill3,
            add
        }).then((res)=>{
            console.log(res);
            navigate('/todospet')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div  className='App contenido'> 
                <div className='col-6 mx-auto' >
            <h1> Pet Shelter - Edit </h1>
            <form onSubmit={submitHandler}>
    
                <label htmlFor=""  className='form-label'>Pet Name</label>
                <input type="text" className='form-control' value={petname1} onChange={(e)=>setName1(e.target.value)}/>
                {errors.petname1 ? <span className='text-danger'> {errors.petname1.message}</span> : null }<br></br>
    
                <label htmlFor="" className='form-label'>Pet Type</label>
                <input type="text" className='form-control' value={pettype} onChange={(e)=>setType(e.target.value)}/>
                {errors.pettype ? <span className='text-danger'>{errors.pettype.message} </span>: null} <br />
    
                <label htmlFor="" className='form-label'>Pet Description </label>
                <input type="text" className='form-control' value={petdescription} onChange={(e)=>setDescription(e.target.value)}/>
                {errors.petdescription ? <span className='text-danger'>{errors.petdescription.message} </span>: null} <br />
    
                <label htmlFor="" className='form-label'>Skill 1 </label>
                <input type="text" className='form-control' value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
                {errors.skill1 ? <span className='text-danger'>{errors.skill1.message} </span>: null} <br />
    
                <label htmlFor="" className='form-label'>Skill 2 </label>
                <input type="text" className='form-control' value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
                {errors.skill2 ? <span className='text-danger'>{errors.skill2.message} </span>: null} <br />
    
                <label htmlFor="" className='form-label'>Skill 3 </label>
                <input type="text" className='form-control' value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
                {errors.skill3 ? <span className='text-danger'>{errors.skill3.message} </span>: null} <br />
    
    
                <label htmlFor="" className='form-label'>Add Image Pet URL</label>
                <input type="text" className='form-control' value={add} onChange={(e)=>setAdd(e.target.value)}/>
                {errors.creador ? <span className='text-danger'>{errors.add.message} </span>: null} <br />
    
                <button className='btn btn-outline-primary'> Update Pett</button>
    
        
            </form>
        </div>
        </div>


     )


}

export default EditarPet