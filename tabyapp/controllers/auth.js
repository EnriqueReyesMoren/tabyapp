const express = require("express")
const passport = require("passport")
const router = express.Router()
const User = require("../models/User")
const uploader = require("../config/cloudinary")
    // Bcrypt to encrypt passwords
const bcrypt = require("bcrypt")
const { find, findByIdAndUpdate } = require("../models/User")
const bcryptSalt = 12

//============SIGNUP================

exports.signupView = (req, res) => res.render("/")


// maybe latter  uploader.single("photo")
exports.signupProcess = async(req, res) => {
    // 1. Extraer la informacion del req.body
    const { username, email, password } = req.body
        // 2. Verificar que nos enviaron la informacion necesaria
    if (username === "" || email === "" || password === "") {
        return res.render("welcome", { error: "Missing fields" })
    }
    // 3. Verificamos que el usuario existe
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    if (existingUser) {
        return res.render("welcome", { error: "Username or Email in use" })
    }


    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(password, salt)

    let newUser
    if (req.file) {
        newUser = new User({
            username,
            password: hashPass,
            profilePic: req.file.path || null,
            email
        })
    } else {
        newUser = new User({
            username,
            password: hashPass,
            email
        })
    }

    newUser.save().then(() => {
            res.redirect("/welcome")
        })
        .catch(err => {
            console.log(err)
            res.render("welcome", { message: "Something went wrong" })
        })
}


//============LOGIN================

exports.loginView = (req, res) => {
    console.log(req.session)
    res.render("/welcome", { message: req.flash("error") })
}

exports.loginProcess = passport.authenticate('local', {
        successRedirect: "/auth/profile/",
        failureRedirect: '/welcome',
        failureFlash: true,
        passReqToCallback: true
    })
    // maybe later  uploader.single("photo") 

//Login
exports.profile = (req, res) => {
    res.render('profile', { user: req.user });
}

exports.getContent = async(req, res) => {
    // const { id } = req.params
    const user = await User.findById({ _id: req.params });
    res.render('profile', { user });
}

//social login controllers

exports.googleProcess = passport.authenticate('google', {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
})

exports.googleRedirect = passport.authenticate('google', {
    successRedirect: "/auth/profile",
    failureRedirect: "/welcome",
    failureFlash: true
})

exports.facebookProcess = passport.authenticate('facebook', {
    scope: [
        "email"
    ]
})

exports.facebookRedirect = passport.authenticate('facebook', {
    successRedirect: "/auth/profile",
    failureRedirect: "/welcome",
    failureFlash: true
})


//     //Add Habit
// exports.addHabit = (req, res) => {
//     res.render('addHabit')
// }

// //View Habit

// exports.viewHabit = (req, res) => {
//   res.render('habitPage')
// }

// exports.getMainPage = (req,res) => {
//   res.render('main')
// }

// exports.getBoost = (req,res) => {
//   res.render('boost')
// }


exports.updatePic = async (req,res) => {
 const { path: profilePic } = req.file

  await User.findByIdAndUpdate({ 
  profilePic
})
res.redirect("/habit/profile")


  await User.findByIdAndUpdate( req.user, { profilePic: req.file.path}  )
  res.redirect('/profile')
}


//Logout
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/welcome')
}