const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController')

/* GET home page. */
router.get('/detail/:id', profileController.index);

router.get('/edit', profileController.edit);

module.exports = router;