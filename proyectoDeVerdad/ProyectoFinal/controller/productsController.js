const data = require('../database/models')
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

    productosAdd: function (req, res) {
        return res.render('product-add')},

        
    productosEdit: function (req, res) {
            return res.render('productEdit')},
    
    add: function(req, res){
        res.send (req.body)

        //1ero vamos a querer obtener los datos del form y armar un objeto literal que vamos a guardar
        let productAdd = {
            nombre: req.body.nombre,
            descripcion:req.body.descripcion,
            image:req.body.image,
            UsersId: req.body.UsersId,
        }
        //2do guardamos la info en database
        alfajores.create(productAdd)
            .then (function(respuesta) {
                return res.redirect ('/')
            })
            .catch(error => console.log(error))  
        //3ro redirigimos a pagina
    }

}

module.exports = productController