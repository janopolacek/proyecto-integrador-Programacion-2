const data = require('../database/models')

const searchResultsCon = {
    index: function (req, res) {
        return res.render('search-results', {
            alfajoresLista: data.producto,
        })
    },
    register: function (req,res) {
        return res.render('register')
    },
    login: function (req,res) {
        return res.render('login')
    }
}

module.exports = searchResultsCon