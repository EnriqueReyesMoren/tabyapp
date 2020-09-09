const express = require("express")
const router = express.Router()
const { home, welcome } = require("../controllers")

router.get("/", home)


router.get('/welcome', welcome)


module.exports = router