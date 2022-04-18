const express = require ('express')
const router = express.Router();
const productsControlador = require("../controller/productsController")

// product add
router.get ("/products-add", productsControlador.productosAdd)
// product edit 
router.get ("/products-edit", productsControlador.productosEdit)

router.get ("/products/:id", productsControlador.productos)



module.exports = router; 