const express = require ('express')
const router = express.router
const productsControlador = require("../controller/productsController")

// product add 
// product edit 
router.get ("/:id", productsControlador)


module.exports = router; 