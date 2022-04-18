const data = require('../db/db')

const productController = {
    productos: function (req, res) {
        return res.render('products', {
            listadoAlfajores: data.alfajores,
            listaDeComentarios:data.comentarios,
            id: req.params.id,
        
        })
    },

    productosAdd: function (req, res) {
        return res.render('product-add')},

        
    productosEdit: function (req, res) {
            return res.render('productEdit')}

}

module.exports = productController