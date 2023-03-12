// CONFIGURACION
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000

require('dotenv').config()

const cookieParser = require('cookie-parser')

// requerir archivo de configuracion
require('./config/mongoose.config')


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middleware que agregar cookies a la solicitud
app.use(cookieParser())

//CORS 
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))


// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const Rutas = require('./routes/pet.routes')
Rutas(app)
const rutasUsuarios = require('./routes/user.routes')
rutasUsuarios(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

