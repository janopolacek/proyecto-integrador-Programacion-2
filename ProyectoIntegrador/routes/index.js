const express = require ('requireExpress')
const router = express.router
const indexController = require ('../controller/indexController')

router.get ('/'), indexControlador.index
router.get ('/login'), indexControlador.login
router.get ('/register'), indexControlador.register


module.exports = router