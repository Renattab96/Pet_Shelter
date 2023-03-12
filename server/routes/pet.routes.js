const ControladorPet = require('../controllers/pet.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) =>{
    app.get('/api/obtenerpet' , ControladorPet.obtenerPet ) 
    app.get('/api/obtenerunpet/:id', ControladorPet.obtenerUnPet)
    app.post('/api/crearpets', ControladorPet.crearPet) 
    app.put('/api/editarpet/:id', ControladorPet.editarPet)
    app.delete('/api/borrarpet/:id', ControladorPet.eliminarPet)
}