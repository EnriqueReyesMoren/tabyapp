const express = require("express")
const router = express.Router()
const { ensureLogin, catchErrors } = require("../middlewares")
const uploader = require("../config/cloudinary")

const routeGuard = require('../config/route-guard');

const {
    createHabit,
    getHabits,
    addHabit,
    viewHabit,
    getMainPage,
    getBoost
} = require("../controllers/habits")


/* router.get("/", catchErrors(getAllHabits))
router.get("/main", (req, res) => {
    res.render("main", req.user)
}) */

router.get("/main", ensureLogin, catchErrors(getHabits))

router.post("/add-habit",
    ensureLogin,
    uploader.single("image"),
    catchErrors(createHabit)
)

/* router.get("/habit/:habitId", habitDetail)
router.get("/habits/end", deleteHabit)
router.get("/habit/end/:habitId", achieveHabit)
 */


//toAddHabitPage
router.get('/add-habit', addHabit)

//toHabitPage
router.get('/habit/:habitId', viewHabit)

// toMainPage
router.get("/habit/main", getMainPage)

//toBoostPage
router.get("/boost", getBoost)


module.exports = router