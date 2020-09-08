const express = require("express")
const router = express.Router()
const { home, welcome } = require("../controllers")

router.get("/", home)
    /* router.get("/profile", profile)
     */

//SignUpLoginProcess

router.get('/welcome', welcome)


module.exports = router