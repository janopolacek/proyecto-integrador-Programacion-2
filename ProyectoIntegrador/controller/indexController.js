const data = require('../db/db')

const indexControlador = {
    lista: function (req, res) {
        return res.render('index', {
            listadoAlfajores: data.data.alfajores
        })
    },
    marca: function (req, res) {
        
    },
    marca: function (req, res) {
        
    },
    marca: function (req, res) {
        
    },
}

