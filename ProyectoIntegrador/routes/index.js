const express = require ('express')
const router = express.router
const indexController = require ('../controller/indexController')

router.get ('/', indexController)
router.get ('/login', indexController.login)
router.get ('/register', indexController.register)


module.exports = router