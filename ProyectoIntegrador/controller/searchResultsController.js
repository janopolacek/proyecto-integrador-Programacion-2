const data = require('../db/db')

const searchResultsCon = {
    index: function (req, res) {
        return res.render('search-results', {
            alfajoresLista: data.alfajores,
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