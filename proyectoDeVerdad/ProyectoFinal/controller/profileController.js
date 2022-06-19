const data = require('../database/models')

const profileController = {
    index: function(req, res) {
        return res.render('profile',{
            data: data.usuario,
            productos: data.producto,
        })
    },
    edit: function(req, res) {
    return res.render('profileEdit');
    },
};

module.exports = profileController;