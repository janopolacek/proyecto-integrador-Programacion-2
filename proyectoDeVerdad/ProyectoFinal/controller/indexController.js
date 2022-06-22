const data = require('../database/models')
const user = data.Users
const bcrypt = require('bcryptjs')



const indexController = {
    lista: function (req, res) {
        data.Producto.findAll()
        .then(productos => {
            return res.render('index', {
                listadoAlfajores: productos,
            })    
        })

        .catch(error => console.log(error))
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
           /* console.log("entre al sign in");
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    //si trajo un usuario hay que chequear la contraseña con compareSync()
                    //Si las contraseñas no coincuiden mandamos mensaje de error.
                    console.log(req.body)
                    console.log('el usuario es: ' + user);
    
                    if(user){
                        console.log('entro al if(user)');
                        if(bcrypt.compareSync(req.body.password, user.password)){
                            //Si el usuario tildó recordarme creo la cookie
                            if (req.body.remember) {
                                res.cookie('userId',user.dataValues.id,{maxAge: 1000*60*10} );
                            } 
                            console.log('coinciden');
                            req.session.user = user.dataValues;
                            res.locals.errores = ''
                            console.log('los errores son' + res.locals.errores);
                            return res.redirect('/profile/' + user.dataValues.id)
                        } else {
                            res.locals.errores = {mensaje:"la password no concide"};
                            console.log('los errores son' + res.locals.errores);
                            return res.render('login')
                        }
    
                    } else{
                        res.locals.errores = {mensaje:"El email es incorrecto"}; 
                        console.log(res.locals.errores);
                        return res.render('login')
                    }
                })
                .catch(error => console.log(error))
            
        },*/



        user.findOne({
            where:[{username : req.body.usuario}]
        })
        .then(function(users){
            //falta la validacion si existe o no el mail
         if(user){
            req.session.user = users.dataValues ;
            // si el usuario tildo recordame creo la cookie
            res.cookie('userID',users.dataValues.id,{maxAge:1000*60*10})
        }
        console.log(req.session.user)
        // console.log(req.session.user); //para ver si existe la session 
            return res.redirect('/')
        })
        .catch(error => console.log(error))
    },
    
    logout:  function (req, res) {
    
       req.session.destroy();

       if (req.cookies.userid !== undefined) {
           res.clearCookie('userId')
        }
     //   return res.redirect('/');

  
}
}
module.exports = indexController;