const db = require("../database/models");      //Requiero db 
const Productos = db.Producto;             //Alias de la db
const op = db.Sequelize.Op;

const searchResultsCon = {
    search: function(req,res){  
        let palabraBuscada = req.query.search;                                           /* search es el input name del formulario de los headers*/ 
        let promesaNombre = Productos.findAll({
                                where:[{ nombre:{ [op.like]: `%${palabraBuscada}%`}}] 
                             });
        let promesaDescripcion = Productos.findAll({
                        where:[{ descripcion:{ [op.like]: `%${palabraBuscada}%`}}]
                    });
        let erroresBuscador = {};
        if(palabraBuscada == "") {
            erroresBuscador.msg = 'Ingresa tu busqueda'
            res.locals.erroresBuscador = erroresBuscador;
            return res.render('searchresults')
        } else {  
            Promise.all([promesaNombre, promesaDescripcion])                                //Le paso como parametro un array con promesaNombre y promesaDescripcion
            .then(function([resNombre, resDescripcion]){
                if (resNombre.length === 0 && resDescripcion.length === 0){
                    erroresBuscador.msg = "No hay resultados para tu busqueda"
                    res.locals.erroresBuscador = erroresBuscador;
                    return res.render('searchresults')
                } 
                let arrDeResultados = [];
                for (let i = 0; i < resNombre.length; i++) {
                    arrDeResultados.push(resNombre[i])
                } 
                for (let i = 0; i < resDescripcion.length; i++) {
                    arrDeResultados.push(resDescripcion[i])
                } 
                res.render('searchResults', {
                    resultados: arrDeResultados
                })
            })
            .catch(err => console.log(err));
        }
    }
}

module.exports = searchResultsCon