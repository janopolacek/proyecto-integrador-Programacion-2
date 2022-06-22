const db = require('../database/models')
const productos = db.Producto
const usuarios = db.Users
const comentarios = db.Comments


const productController = {
    productos: function (req, res) {
        return res.render('products', {
            listadoAlfajores: data.producto,
            listaDeComentarios:data.comentario,
            id: req.params.id,
        
        })
    },

    guardar: function (req, res) {
          let productAdd = {
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            image:req.file.filename,
           // UsersId: req.session.user.id,
            UsersId: 1,
        }
        //2do guardamos la info en database
        productos.create(productAdd)
            .then (function(respuesta) {
                //console.log(respuesta)
                return res.redirect ('/')
            })
            .catch(error => console.log(error)) 
    },

        
    productosEdit: function (req, res) {
            return res.render('productEdit')},
    
    productosAdd: function(req, res) {
       // res.send (req.body)
        return res.render ("product-add")
        //1ero vamos a querer obtener los datos del form y armar un objeto literal que vamos a guardar
   
        //3ro redirigimos a pagina
    },
        delete:function(req,res){} ,
        comentario: function (req,res){},
        edited: function(req,res){},
    detail: function(req, res) {
        db.Producto.findByPk(req.params.id)
        .then(producto => {
            return res.render('product-detail', {
                producto: producto,
            })
        })
        .catch(error => console.log(error))
    }
}

module.exports = productController