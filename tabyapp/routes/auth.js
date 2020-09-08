const express = require("express")
const router = express.Router()
const {
    signupView,
    signupProcess,
    loginView,
    loginProcess,
    profile,
    getContent,
    welcome
} = require("../controllers/auth")

router.get("/", signupView)
router.post("/signup", signupProcess)
    //login
router.get("/", loginView)
router.post("/login", loginProcess)

//toProfile 
router.get('/profile', profile)
router.get('/profile/:id', getContent)

// router.get('/add-habit', addHabit)



module.exports = router