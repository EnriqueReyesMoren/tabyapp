const express = require("express")
const router = express.Router()
const { ensureLogin, catchErrors } = require("../middlewares")

const {
    createMood,
    getMoods,
    addMood
} = require("../controllers/mood")


/* router.get("/", catchErrors(getAllHabits))
router.get("/main", (req, res) => {
    res.render("main", req.user)
}) */

router.get("/main", ensureLogin, catchErrors(getMoods))

router.get('/add-mood', addMood)

router.post("/add-mood",
    ensureLogin,
    catchErrors(createMood))






module.exports = router

/* router.get("/habit/:habitId", habitDetail)
router.get("/habits/end", deleteHabit)
router.get("/habit/end/:habitId", achieveHabit)
 */



//toHabitPage
/* router.get('/:addId', viewMood)
 */