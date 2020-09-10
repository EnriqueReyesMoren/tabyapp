const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: String,
    googleID: String,
    facebookID: String,
    email: String,
    password: String,
    profilePic: {
        type: String
    },
    habits: {
        type: [Schema.Types.ObjectId],
        ref: "Habit"

    },
    moods: {
        type: [Schema.Types.ObjectId],
        ref: "Moods"

    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"

    }
})

module.exports = model("User", userSchema)