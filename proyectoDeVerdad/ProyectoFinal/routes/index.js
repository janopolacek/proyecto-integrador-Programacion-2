const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.lista);

router.get('/register', indexController.register);

router.get('/login', indexController.login)

module.exports = router;