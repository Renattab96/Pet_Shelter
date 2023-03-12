const Pet = require('../models/pet.model')


const obtenerPet = (req, res)=>{
    Pet.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerUnPet = (req, res)=>{
    Pet.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const crearPet =  (req, res)=>{
    Pet.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
            res.status(400).json(error)
    })
}

const editarPet = (req, res)=>{
    Pet.updateOne({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
        res.status(400).json(error)
    })
}


const eliminarPet = (req, res)=>{
    Pet.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerPet,
    obtenerUnPet,
    crearPet,
    editarPet,
    eliminarPet
}