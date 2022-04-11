const express = require ('express')
const router = express.router
const productsControlador = require("../controller/productsController")

router.get ("/products", productsControlador)

module.exports = router