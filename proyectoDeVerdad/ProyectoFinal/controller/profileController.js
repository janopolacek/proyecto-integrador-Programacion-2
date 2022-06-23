const data = require('../database/models')
const productos = data.Producto;
const users = data.Users;
const comentarios = data.Comment;
const Follower = data.Followers;



const profileController = {
    index: function (req, res) {
        productos.findAll({
                where: [{
                    UsersId: req.params.id
                }],
            })
            .then(function (productos) {
                users.findByPk(req.params.id)
                    .then(function (usuarios) {
                        Follower.findAll({
                                where: [{
                                    UsersId: req.params.id
                                }]
                            })
                            .then(function (Follower) {
                                comentarios.findAll({
                                        include: [{
                                            association: "UsersComments"
                                        }],
                                        where: [{
                                            UsersId: req.params.id
                                        }]
                                    })
                                    .then(function (comentarios) {
                                        return res.render('profile', {
                                            usuarios: usuarios,
                                            productos: productos,
                                            Follower: Follower,
                                            comentarios: comentarios
                                        });
                                    })
                                    .catch(error => console.log(error))
                            })
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    },
    edit: function(req, res) {
    return res.render('profileEdit');
    },
};

module.exports = profileController;