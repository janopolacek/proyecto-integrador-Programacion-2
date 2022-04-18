const data = require('../db/db')

const profileController = {
    index: function(req, res) {
        return res.render('profile',{
            data: data.usuario,
            productos: data.alfajores,
        })
    },
    edit: function(req, res) {
    return res.render('profileEdit');
    },
};

module.exports = profileController;