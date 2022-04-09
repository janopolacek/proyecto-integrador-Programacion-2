const express = require ('requireExpress')
const router = express.router
const products = require("../controller/productsController")

router.get ("/products", products.info )

module.exports = router