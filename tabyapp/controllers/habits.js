const express = require("express")
const passport = require("passport")
const router = express.Router()

const User = require("../models/User")
const Habit = require("../models/Habit")



exports.createHabit = async(req, res) => {
    // 1. extraer la informacion
    const { name, intention, period, goal, notes, color } = req.body
    const { path: image } = req.file
    const { id: userTaby } = req.user
        // 2. creamos el producto en base al usuario en sesion
    await Habit.create({
        name,
        intention,
        period,
        goal,
        notes,
        color,
        image,
        userTaby
    })
    res.redirect("/main")
}