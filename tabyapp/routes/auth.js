const express = require("express")
const router = express.Router()



const {
    signupView,
    signupProcess,
    loginView,
    loginProcess,
    googleProcess,
    googleRedirect,
    facebookProcess,
    facebookRedirect,
    profile,
    getContent,
    welcome,
    // addHabit,
    // viewHabit,
    // getMainPage,
    // getBoost
} = require("../controllers/auth")

router.get("/", signupView)
router.post("/signup", signupProcess)
    //login
router.get("/", loginView)
router.post("/login", loginProcess)

//socialLogin
router.get('/google', googleProcess)
router.get('/google/callback', googleRedirect)
router.get('/facebook', facebookProcess)
router.get('/facebook/callback', facebookRedirect)
    //toProfile 
router.get('/profile', profile)
router.get('/profile/:id', getContent)

// //toAddHabitPage
// router.get('/add-habit', addHabit)

// //toHabitPage
// router.get('/habit', viewHabit)

// // toMainPage
// router.get("/main", getMainPage)

// //toBoostPage
// router.get("/boost", getBoost)



module.exports = router