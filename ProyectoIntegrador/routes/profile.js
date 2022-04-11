const express = require ('express')
const router = express.router
const profileControlador = require("../controller/profileController")

router.get ("/profile", profileControlador)
//perfil edit 
// profile de otro usuario 


module.exports = router