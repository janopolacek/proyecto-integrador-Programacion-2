const alfajores = require("../db/db")

const indexControlller = {
    lista: function(req, res){
        return res.render("alfajores", {
            listadealfajores: alfajores.lista
        })},

nombre: function (req, res) {
    // voy a querer tener un contenedor de datos (array ;) ) vacío
    let coincidencias = [];
    // Recorrer el listado de autos
    for (let i = 0; i < alfajores.lista.length; i++) {
        const alfajor= alfajores.lista[i];
        // En cada iteración quiero preguntarme si el auto en cuestión tiene como marca la marca ingresada en el parametro
        if (alfajores.nombre.toLowerCase() === req.params.name.toLowerCase()) {
            // Si el auto en cuestión coincide con la marca, lo agrego a la colección (array)
            coincidencias.push(alfajor)
        } // Sino, no hago nada        
    }
    // Una vez que terminaron de recorrer se quieren preguntar si el array que declaramos al pricnipio esta vacio o completo
    if (coincidencias.length !== 0) {
        // Si NO está vacía, quiero enviarle la colección
        return res.send(coincidencias)
    } else {
        // Si esta vacía, quieren enviarle un msg al usuario indicando que no se encontraron resultados
        return res.send('No encontramos coincidencias')
    }
}
}

module.exports = indexControlller

