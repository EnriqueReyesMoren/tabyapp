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
        default: "https://img.discogs.com/KAHyZsGakLcw64EJAL7H1-8JSpM=/450x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2013868-1492186788-3478.png.jpg"
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