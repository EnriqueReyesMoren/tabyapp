// const express = require("express")
// const passport = require("passport")
// const router = express.Router()

const User = require("../models/User")
const Moods = require("../models/Moods")

//Add Habit

exports.addMood = async(req, res) => {

    const result = await Moods.find()
    const mood = result.reverse()
    res.render('addMood', { mood })
}




exports.getMoods = async(req, res) => {
        const result = await User.find().populate("moods")
        const mood = result.reverse()
        res.render('moodCards', { mood })
    }
    //View Habit

exports.viewHabit = (req, res) => {
    res.render('moodPage')
}




exports.createMood = async(req, res) => {
    // 1. extraer la informacion
    const { mood, scale, notes } = req.body
    const { id: userTaby } = req.user
        // 2. creamos el producto en base al usuario en sesion
    const newMood = await Moods.create({
        mood,
        scale,
        notes,
        userTaby
    })
    await User.findByIdAndUpdate(req.user.id, {
        $push: {
            moods: newMood._id
        }
    })

    res.redirect("/mood/main")
}