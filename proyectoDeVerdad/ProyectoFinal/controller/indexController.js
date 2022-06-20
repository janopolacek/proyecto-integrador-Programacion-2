const data = require('../database/models')
const producto = data.Producto
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






        user.findOne({
            where:[{mail: req.body.mail}]
        })
        .then(function(user){
            //falta la validacion si existe o no el mail
         if(user){
            req.session.user = user.dataValues ;
         }
         console.log(req.session.user); //para ver si existe la session 
            return res.redirect('/')
        })
        .catch(error => console.log(error))

    },
  //  logout:  function (req, res) {
    
   //     req.session.destroy();

    //    if (req.cookies.//user id !== undefined) {
     //       res.clearCookie('userId')
     //   }
     //   return res.redirect('/');

  //  }
}

module.exports = indexController;