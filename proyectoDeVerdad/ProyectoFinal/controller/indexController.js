const data = require('../database/models')
const user = data.usuario
const bcrypt = require('bcryptjs')



const indexController = {
    lista: function (req, res) {
        return res.render('index', {
            listadoAlfajores: data.producto,
        })
    },
    register: function (req,res) {
        return res.render('register')
    },
   
    store: function(req, res){
        let usuarios = {
            usuario: req.body.usuario,
            mail: req.body.mail,
            password: bcrypt.hashSync(req.body.password, 10),
            fechaDeNacimiento: req.body.FechaDeNacimiento,
            DNI: req.body.NumeroDeDocumento,
        }
        user.create(usuarios)
        .then(function(respuesta){
            return res.redirect('/')
        })
        .catch(error => console.log(error)) 
    },

    login: function (req,res) {
        return res.render('login')
    },
    signin: function(req,res){


    },
}

module.exports = indexController;