const User = require("../models/User")
const Moods = require("../models/Moods")

//Add Habit

exports.addMood = async(req, res) => {

    const result = await Moods.find()
    const mood = result.reverse()
    res.render('addMood', { mood })
}




exports.getMoods = async(req, res) => {
        const user = await User.findById(req.user.id).populate("moods")
        console.log(user)
        res.render('moodCards', { user })
    }
    //View Habit


//View Habit


exports.viewMood = (req, res) => {
    res.render('moodPage')
}

exports.getMoodInfo = async(req, res) => {
    const mood = await Moods.findById(req.params.moodId)
    console.log(mood)
        /*  const habits = result.reverse() */
    res.render('moodPage', mood)
}



exports.createMood = async(req, res) => {
    // 1. extraer la informacion
    const { mood, scale, note } = req.body
    const { id: userTaby } = req.user
        // 2. creamos el producto en base al usuario en sesion
    const newMood = await Moods.create({
        mood,
        scale,
        note,
        userTaby
    })
    await User.findByIdAndUpdate(req.user.id, {
        $push: {
            moods: newMood._id
        }
    })

    res.redirect("/mood/main")
}

exports.updateMoodView = async(req, res) => {
    const mood = await Moods.findById(req.params.moodId)
    res.render('updateMood', {
        user: req.user,
        mood
    })
}

exports.updateMoodProcess = async(req, res) => {
    const { mood, scale, note } = req.body
        /*  const { path: image } = req.file */
    const { id: userTaby } = req.user
    await Habit.findByIdAndUpdate(req.params.moodId, {
        mood,
        scale,
        note,
        /* image, */
        userTaby
    })

    res.redirect("/mood/main")
}

exports.deleteMood = async(req, res) => {
    await Moods.findByIdAndDelete(req.params.moodId)
    res.redirect("/mood/main")
}