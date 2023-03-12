const mongoose = require('mongoose')

// Schema
const PetSchema = mongoose.Schema({
    petname1:{
        type:String,
        required:[true, "Por favor escribe un nombre"],
        minLength:[3, "Nombre debe incluir al menos 3 caracteres"]
    },
    pettype:{
        type:String,
        required:[true, " Por favor agrega un tipo" ]
    },
    petdescription:{
        type:String,
        required:[true, " Por favor agrega un tipo" ]
    },
    skill1:{
        type:String,
        required:[true, " Por favor agrega una habilidad" ]
    },
    skill2:{
        type:String,
        required:[true, " Por favor agrega una habilidad" ]
    },
    skill3:{
        type:String,
        required:[true, " Por favor agrega una habilidad" ]
    },
 
    add:{
        type:String
    }
},{timestamps:true})

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet 