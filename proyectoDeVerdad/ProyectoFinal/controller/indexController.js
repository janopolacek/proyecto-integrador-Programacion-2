const data = require('../database/models')
const user = data.Users
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
            username: req.body.usuario,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            DNI: req.body.dni,
          
        }
        user.create(usuarios)
        .then(function(respuesta){
            console.log(respuesta)
             //return res.send(respuesta)
            return res.redirect('/login')
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