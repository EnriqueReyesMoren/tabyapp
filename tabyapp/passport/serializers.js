const passport = require("passport")
const User = require("../models/User")

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id)
})

passport.deserializeUser(async(userIdFromSession, cb) => {
    const userDocument = await User.findById(userIdFromSession)
        .populate({

            path: "habit",
            model: "Habit",
        })

    cb(null, userDocument)
})

/* passport.deserializeUser(async(id, done) => {
    try {
        const user = await User.findById(id)
        const { username, profilePic } = user
        delete user.password
        done(null, { username, profilePic })
    } catch (error) {
        done(error)
    }
}) */