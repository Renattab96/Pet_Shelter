const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: [true, "Por favor ingresa tu nombre"]
    },
    apellido: {
      type: String,
      required: [true, "Por favor ingresa tu apellido"]
    },
    email: {
      type: String,
      required: [true, "Por favor ingresa tu correo electronico"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Por favor ingresa una direccion de correo valida"
      }
    },
    password: {
      type: String,
      required: [true, "Por favor ingresa una contrasena"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});
  
//middleware
UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log(" HASHED CONTRASENIA", hashedPassword)
        this.password = hashedPassword
        next()
    }catch{
        console.log("Error en guardar usuario", error)
    }
})

  
module.exports = mongoose.model('Usuario', UserSchema)