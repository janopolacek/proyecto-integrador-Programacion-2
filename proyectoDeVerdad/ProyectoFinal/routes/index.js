const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.lista);

router.get('/register', indexController.register);
router.post('/register/store', indexController.store) //action del formulario 


router.get('/login', indexController.login)
router.post('/login',indexController.signin)
module.exports = router;