const express = require('express');
const router = express.Router();
const controladores = require("..controller/indexControlador");
const indexControlller = require('/indexController');

/* GET home page. */
router.get('/', indexControlller.lista);
router.get('/', indexControlller.nombre);

module.exports = router;
