const express = require ('express');
const router = express.Router();
const indexControlador = require ('../controller/indexController')

router.get ('/', indexControlador.lista)
router.get ('/login', indexControlador.login)
router.get ('/register', indexControlador.register)


module.exports = router