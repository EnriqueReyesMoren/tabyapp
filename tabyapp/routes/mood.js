
const express = require("express")
const router = express.Router()
const { ensureLogin, catchErrors } = require("../middlewares")

const {
    createMood,
    getMoods,
    addMood,
    updateMoodProcess,
    updateMoodView,
    getMoodInfo,
    deleteMood
} = require("../controllers/mood")


/* router.get("/", catchErrors(getAllHabits))
router.get("/main", (req, res) => {
    res.render("main", req.user)
}) */

router.get("/main", ensureLogin, catchErrors(getMoods))

router.get('/add-mood', addMood)

router.get('/:moodId', getMoodInfo)

router.post("/add-mood",
    ensureLogin,
    catchErrors(createMood))


router.get('/update/:moodId', ensureLogin, updateMoodView)

router.post('/update/:moodId', ensureLogin, updateMoodProcess)

router.get('/delete/:moodId', ensureLogin, deleteMood)

router.post('')





module.exports = router