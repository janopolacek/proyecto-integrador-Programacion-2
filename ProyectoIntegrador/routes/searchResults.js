const express = require ('express')
const router = express.router
const searchResultsCon = require("../controller/searchResultsController")

router.get ("/search-results", searchResultsCon)

module.export = router