const data = require('../database/models')
const user = data.usuario
const indexController = {
    lista: function (req, res) {
        return res.render('index', {
            listadoAlfajores: data.alfajores,
        })
    },
    register: function (req,res) {
        return res.render('register')
    },
    login: function (req,res) {
        return res.render('login')
    },
    store: function(req, res){
        let usuarios = {
            usuario: req.body.usuario,
            mail: req.body.mail,
            password: req.body.password,
            fechaDeNacimiento: req.body.FechaDeNacimiento,
            DNI: req.body.NumeroDeDocumento,
        }
        user.create(usuarios)
        .then(function(respuesta){
            return res.redirect('/')
        })


        .catch(error => console.log(error)) 
    }
}

module.exports = indexController;