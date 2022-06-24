const data = require('../database/models')
const users = data.Users
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
        
        let errores = {}
        if(req.body.email == ""){
            errores.message = "El email es obligatorio";
            res.locals.errores = errores;
            return res.render('register');
        } else if(req.body.password == ""){
            errores.message = "la contraseña es obligatoria";
            res.locals.errores = errores;
            return res.render('register');                     
        } else if(req.body.usuario == undefined){
            errores.message = "Es obligatorio completar el usuario";
            res.locals.errores = errores;
            return res.render('register');                     
        }  else {
            //Chequear que el usuario no exista en la base.
            users.findOne({
                where: [{ username: req.body.usuario}]
            })
            .then( function(user)     {
                if(user !== null){
                    errores.message = "El usuario ya existe. Por favor, elija otro.";
                    res.locals.errores = errores;
                    return res.render('register');
                } else {
                    //Obtener los datos del formulario y armar el objeto literal que quiero guardar
                    let user = {
                        username: req.body.usuario,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        DNI: req.body.dni,
                        image: req.file.filename, }

                    //Guardar la info en la base de datos
                    users.create(user)
                        .then( function(userGuardado){ //En el parámetro recibimos el registro que se acaba de crear en la base de datos.
                           
                            return res.redirect('/login')
                        })
                        .catch( error => console.log(error))
                        }
            })                
            .catch(errors => console.log(errors))
            }},
                          
            

                

    
                 /* else {
                    


        let usuarios = {
            username: req.body.usuario,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            DNI: req.body.dni,
        }
        users.create(usuarios)
        .then(function(respuesta){
            console.log(respuesta)
             //return res.send(respuesta)
            return res.redirect('/login')
        })
    
        .catch(error => console.log(error))}},
    */
        
    

    login:  function(req, res){
        //mostrar el form de registro
        //Chequear que un usario esté logueado
        return res.render('login');
        
    },
    signin: 
        function (req, res) {
            let errores = {}
            
            users.findOne({
                    where: [{
                        username: req.body.usuario
                    }]
                })
    
                .then(function (user) {
                    if (user) {
                        let compare = bcrypt.compareSync(req.body.password, user.password);
                        if (compare) {
                            req.session.user = user.dataValues; 
    
                            if (req.body.recordarme) {
                                res.cookie('userId', user.dataValues.id, {
                                    maxAge: 1000 * 60 * 100
                                })
                                console.log(errores)
                            }
                            return res.redirect('/');
    
                        } else {
                            errores.message = "Contraseña incorrecta" 
                            res.locals.errores = errores 
                            return res.render('login');
                            
                        }
    
                    } else {
                        errores.message = "Ese usuario no existe" 
                        res.locals.errores = errores 
                        return res.render('login');
                        
                    }
                    
                })
                .catch(error => console.log(error))  
    
        },
    
    
    logout:  function (req, res) {
    
       //destruir session
       req.session.destroy();

       //Eliminar cookie si existe.
       if (req.cookies.userId !== undefined) {
           res.clearCookie('userId')
       }

       return res.redirect('/');

  
},
        }
module.exports = indexController;