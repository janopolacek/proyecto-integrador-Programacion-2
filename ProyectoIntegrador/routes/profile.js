const express = require ('requireExpress')
const router = express.router
const profile = require("../controller/profileController")

router.get ("/profile", profile)

module.exports = router