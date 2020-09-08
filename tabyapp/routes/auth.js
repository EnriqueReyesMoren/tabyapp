const express = require("express")
const router = express.Router()
const {
    signupView,
    signupProcess,
    loginView,
    loginProcess,
    Profile
} = require("../controllers/auth")

router.get("/", signupView)
router.post("/signup", signupProcess)
    //login
router.get("/", loginView)
router.post("/login", loginProcess)

//toProfile 
router.get("/profile", Profile)


module.exports = router