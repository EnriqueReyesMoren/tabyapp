const express = require("express")
const router = express.Router()
const { home, welcome } = require("../controllers")

//habit routes

const { ensureLogin, catchErrors } = require("../middlewares")
const uploader = require("../config/cloudinary")

router.get("/", home)


router.get('/welcome', welcome)

// Habits route

module.exports = router