const express = require("express")
const router = express.Router()
const { isAuth, catchErrors } = require("../middlewares")
const uploader = require("../config/cloudinary")

const {

    createHabit
} = require("../controllers/habits")

router.get("/", catchErrors(getAllHabits))
router.get("/main", (req, res) => {
    res.render("main", req.user)
})


router.post("/habit/new/:habitId",
    isAuth,
    uploader.single("image"),
    catchErrors(createHabit)
)

router.get("/habit/:habitId", habitDetail)
router.get("/habits/end", deleteHabit)
router.get("/habit/end/:habitId", achieveHabit)



module.exports = router