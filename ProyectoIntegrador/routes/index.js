const express = require ('requireExpress')
const router = express.router
const indexController = require ('../controller/indexController')

router.get ('/', indexController.index)
router.get ('/login', indexController.login)
router.get ('/register', indexController.register)


module.exports = router