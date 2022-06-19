const data = require('../database/models')

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
            return res.render('productEdit')}

}

module.exports = productController