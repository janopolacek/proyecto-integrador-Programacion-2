const data = require ('../db/db');


const indexControlador = {
    index: function (req,res) {
    return res.render ('index.ejs',{
        data: data.alfajores,
    })

 },

 register: function (req,res){
     return res.render ('register')
 },

 login: function (req,res){
     return res.render('login')
 }
},

module.exports = indexControlador;
