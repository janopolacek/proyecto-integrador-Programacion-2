const db = require('../database/models')
const productos = db.Producto
const usuarios = db.Users
const comentarios = db.Comment
const op = db.Sequelize.Op


const productController = {
    productos: function (req, res) {
        return res.render('products', {
            listadoAlfajores: data.producto,
            listaDeComentarios:data.comentario,
            id: req.params.id,
        
        })
    },

    guardar: function (req, res) {
        //return res.send (req.body) ---> voy a obtener un objeto literal con: nombreColumna: loQueEscribiEnElCampo.
          let productAdd = {
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            image:req.file.filename,
            UsersId: req.session.user.id,
        }
        //1ero vamos a querer obtener los datos del form y armar un objeto literal que vamos a guardar
        //2do guardamos la info en database
        //3ro redirigimos a pagina
        
        productos.create(productAdd)
            .then (function(respuesta) {
                //console.log(respuesta)
                return res.redirect ('/')
            })
            .catch(error => console.log(error)) 
    },

        
    productosEdit: function (req, res) {
            productos.findByPk(req.params.id)
            .then(producto => {
               return res.render('productEdit', {producto: producto})
              
            })

    },
    
    productosAdd: function(req, res) {
       // res.send (req.body)
        return res.render ("product-add")
        },
       
       
        delete: function (req,res){
            productos.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(()=> res.redirect ('/'))
        } ,


        comentario: function (req,res){
            if (req.session.user == undefined) {
                return res.redirect('/users/login')
            } else {
                let comentario = {
                    text: req.body.comentario,
                    usersId: req.session.user.id,
                    productoId: req.params.id
                }
                comentarios.create(comentario)
                .then (function(respuesta){
                    productos.findByPk(req.params.id)
                    .then (function(producto){
                        return res.redirect (`/products/${req.params.id}`)
                    })
                    .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
            };
        },


        edited: function(req,res){
            let product = {
                nombre: req.body.nombre,
                descripcion:req.body.descripcion,
                image:req.file.filename,
                UsersId: req.session.user.id,
            }
            productos.update(product, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (respuesta) {
                return res.redirect(`/products/${req.params.id}`)
            })
            .catch(error => console.log(error))
        },


    detail: function(req, res) {
      
        
            let id = req.params.id
            console.log(id)
            productos.findOne({
                    include: [{
                        association: "Propietario"
                    }],
                    where: {
                        id: id
                    }
                })
                .then(function (elProducto) {
                    comentarios.findAll( {
                            include: [
                                
                            {
                                association: "UsersComments"
                            }],
                            where: [{
                                ProductoId: id
                            }],
                                order: [[['id', 'DESC']]]
                        
                        })
                        .then(function (comentarios) {
                            //return res.send (elProducto)
                            return res.render('products', {
                                producto: elProducto,
                                comments: comentarios
                            })
                        })
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error))    
        },
    search: function(req,res) {
        productos.findAll({
            include: [{
                association: "Propietario"
            }],
            where: {
                [op.or]:[
                    {nombre: {[op.like]:`%${req.query.search}%`}},
                    {descripcion: {[op.like]:`%${req.query.search}%`}}
                ]
            }
        })
        .then(products => {
           // res.send(products)
            res.render('search-results', {productos: products})
        })
    }

    }


module.exports = productController