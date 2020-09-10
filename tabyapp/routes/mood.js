const express = require("express")
const router = express.Router()
const { ensureLogin, catchErrors } = require("../middlewares")

const routeGuard = require('../config/route-guard');

const {
    createMood,
    getMoods,
    addMood,
    /*  viewMood, */
    deleteMood,
    updateMoodView,
    updateMoodProcess
} = require("../controllers/mood")


router.get("/main", ensureLogin, catchErrors(getMoods))

router.post("/add-habit",
    ensureLogin,
    catchErrors(createMood)
)


//toAddHabitPage
router.get('/add-mood', ensureLogin, addMood)

//toHabitPage
/* router.get('/:moodId', ensureLogin, viewMood) */

router.get('/update/:moodId', ensureLogin, updateMoodView)

router.post('/update/:moodId', ensureLogin, updateMoodProcess)

router.get('/delete/:moodId', ensureLogin, deleteMood)


module.exports = router