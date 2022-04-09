const express = require ('requireExpress')
const router = express.router
const searchResults = require("../controller/searchResultsController")

router.get ("/search-results", searchResults )

module.export = router