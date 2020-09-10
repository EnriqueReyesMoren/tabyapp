// const express = require("express")
// const passport = require("passport")
// const router = express.Router()

const User = require("../models/User")
const Habit = require("../models/Habit")

//Add Habit


exports.addHabit = async(req, res) => {

    const result = await Habit.find()
    const habits = result.reverse()
    res.render('addHabit', { habits })
}



exports.getHabits = async(req, res) => {
        const result = await Habit.find()
        const habits = result.reverse()
        res.render('habitsCards', { habits })
    }
    //View Habit

exports.viewHabit = (req, res) => {
        res.render('habitPage')
    }
    // Get Main Page
exports.getMainPage = (req, res) => {
        res.render('main')
    }
    // Boost
exports.getBoost = (req, res) => {
    res.render('boost')
}



exports.createHabit = async(req, res) => {
    // 1. extraer la informacion
    const { name, intention, period, goal, notes, color } = req.body
    const { path: image } = req.file
    const { id: userTaby } = req.user
        // 2. creamos el producto en base al usuario en sesion
    const newHabit = await Habit.create({
        name,
        intention,
        period,
        goal,
        notes,
        color,
        image,
        userTaby
    })
    await User.findByIdAndUpdate(req.user.id, {
        $push: {
            habits: newHabit._id
        }
    })
    res.redirect("/habit/main")
}