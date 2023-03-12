const Usuario = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {

    registraUsuario: async (req, res) =>{
        try{
            const nuevoUsuario = await Usuario.create(req.body)
            const userToken = jwt.sign({_id:nuevoUsuario._id}, SECRET)
            res.status(201).cookie('userToken', userToken, {httpOnly:true })
            .json({successMessage:"Usuario registrado ", user:nuevoUsuario})
        }catch(error){
            console.log(error)
            res.status(401).json(error)
        }
    },
    loginUsuario: async (req, res)=>{
        Usuario.findOne({ email: req.body.email }) //find the user with the email
        .then(user => {
            console.log(" El usuario que intenta ingresar es:", user )
            if (user === null) {
                res.status(400).json({ message: "invalid login attempt" });// Si no existe ese usuario enviar un error 
            } else {
                bcrypt.compare(req.body.password, user.password)// Validar que la contraseña ingresada sea igual a la contraseña en la base de datos
                    .then(password => {

                        if (password) {
                            // Generar el token si es que la contraseña coincide
                            const userToken = jwt.sign({ _id: user._id }, SECRET)
                            // Contiene el token, mientras no se expire o no haga logout puede utilizar la app, httponly para que la cookie no sea desencriptada
                            res.cookie("userToken", userToken, { httpOnly: true }).json({ message: "success! Login"});
                        } else {
                            res.status(400).json({ message: "invalid login attempt" });// Si no es correcta la contraseña emitir un error
                        }
                    })
                    .catch(err => res.status(400).json({ message: "invalid login attempt" }));
            }
        })
        .catch(err => res.status(400).json(err));
    },
    logOutUser:(req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'Usuario salio'})
    }

}
