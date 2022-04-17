const express = require ('express');
const router = express.Router();
const searchResultsCon = require("../controller/searchResultsController")

router.get ("/search-results", searchResultsCon)
router.get ('/login', searchResultsCon.login)
router.get ('/register', searchResultsCon.register)

module.export = router



