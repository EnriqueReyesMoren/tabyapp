const express = require("express")
const router = express.Router()
const {
    signupView,
    signupProcess,
    loginView,
    loginProcess,
    profile,
    getContent,
    welcome,
    addHabit
} = require("../controllers/auth")

router.get("/", signupView)
router.post("/signup", signupProcess)
    //login
router.get("/", loginView)
router.post("/login", loginProcess)

//toProfile 
router.get('/profile', profile)
router.get('/profile/:id', getContent)

//toAddHabitPage
router.get('/add-habit', addHabit)



module.exports = router