const express = require ('express')
const router = express.router
const indexController = require ('../controller/indexController')

router.get ('/', indexController)
router.get ('/login', indexController)
router.get ('/register', indexController)


module.exports = router