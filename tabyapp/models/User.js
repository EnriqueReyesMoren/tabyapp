const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: String,
    googleID: String,
    facebookID: String,
    email: String,
    password: String,
    profilePic: {
        type: String,
        default: "https://dazedimg-dazedgroup.netdna-ssl.com/1831/azure/dazed-prod/1260/8/1268842.jpg"
    },
    habits: [{
        type: Schema.Types.ObjectId,
        ref: "Habit"

    }],
    moods: [{
        type: Schema.Types.ObjectId,
        ref: "Moods"

    }]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"

    }
})

module.exports = model("User", userSchema)