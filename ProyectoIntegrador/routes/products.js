const express = require ('express')
const router = express.router
const productsControlador = require("../controller/productsController")

// product add
router.get ("/productos-add", productsControlador)
// product edit 
router.get ("/productos-edit", productsControlador)

router.get ("/:id", productsControlador.productos)


    
module.exports = router; 