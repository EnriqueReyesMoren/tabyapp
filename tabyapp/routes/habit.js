const express = require("express")
const router = express.Router()
const { ensureLogin, catchErrors } = require("../middlewares")
const uploader = require("../config/cloudinary")

const { createHabit, getHabits } = require("../controllers/habits")



/* router.get("/", catchErrors(getAllHabits))
router.get("/main", (req, res) => {
    res.render("main", req.user)
}) */

router.get("/habit/new", ensureLogin, getHabits)

router.post("/add-habit",
    ensureLogin,
    uploader.single("image"),
    catchErrors(createHabit)
)

/* router.get("/habit/:habitId", habitDetail)
router.get("/habits/end", deleteHabit)
router.get("/habit/end/:habitId", achieveHabit)
 */




module.exports = router