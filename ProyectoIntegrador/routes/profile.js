const express = require ('express')
const router = express.router
const profileControlador = require("../controller/profileController")

router.get ("/profile", profileControlador)

module.exports = router