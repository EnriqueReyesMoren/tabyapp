const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Username is required."],
        unique: true
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required."],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    profilePic: {
        type: String,
    },
    habitsId: {
        type: Schema.Types.ObjectId,
        ref: "Habit"

    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"

    }
})

module.exports = model("User", userSchema)