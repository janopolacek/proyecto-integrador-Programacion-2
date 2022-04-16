const data = require('../db/db')

const productController = {
    productos: function (req, res) {
        return res.render('products', {
            listadoAlfajores: data.data.alfajores,
            listaDeComentarios:data.data.comentarios,
            id: req.params.id,
        
        })
    },

    productosAdd: function (req, res) {
        return res.render('product-Add')},

        
    productosEdit: function (req, res) {
            return res.render('productEdit')}

}

module.exports = productController