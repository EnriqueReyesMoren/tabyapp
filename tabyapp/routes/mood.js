// const express = require("express")
// const router = express.Router()
// const { ensureLogin, catchErrors } = require("../middlewares")

// const routeGuard = require('../config/route-guard');

// const {
//     createMood,
//     getMoods,
//     addMood,
//     viewMood,
//     deleteMood,
//     updateMoodView,
//     updateMoodProcess,
//     getMoodInfo
// } = require("../controllers/mood")


// router.get("/main", ensureLogin, catchErrors(getMoods))



// router.get('/:moodId', getMoodInfo)

// //toAddHabitPage
// router.get('/add-mood', addMood)

// router.post("/add-mood",
//     ensureLogin,
//     catchErrors(createMood)
// )

// //toHabitPage
// router.get('/:moodId', ensureLogin, viewMood)

// router.get('/update/:moodId', ensureLogin, updateMoodView)

// router.post('/update/:moodId', ensureLogin, updateMoodProcess)

// router.get('/delete/:moodId', ensureLogin, deleteMood)


// module.exports = router

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





module.exports = router