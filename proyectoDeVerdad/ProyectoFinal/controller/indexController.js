const data = require('../db/db')

const indexController = {
    lista: function (req, res) {
        return res.render('index', {
            listadoAlfajores: data.alfajores,
        })
    },
    register: function (req,res) {
        return res.render('register')
    },
    login: function (req,res) {
        return res.render('login')
    }
}

module.exports = indexController;