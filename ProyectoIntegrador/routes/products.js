const express = require ('express')
// poner la R mayuscula y los parentesesis en expres.Router();
const router = express.Router();
const productsControlador = require("../controller/productsController")

// product add
router.get ("/productos-add", productsControlador)
// product edit 
router.get ("/productos-edit", productsControlador)

router.get ("/:id", productsControlador.productos)


    
module.exports = router; 