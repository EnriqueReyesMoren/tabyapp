const { Schema, model } = require("mongoose")

const habitSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Your habit needs a name!"],
        unique: true
    },
    intention: {
        type: String,
        enum: ['Build', 'Quit'],
        required: true
    },

    period: {
        type: String,
        enum: [`daily`, `weekly`, `monthly`, `yearly`]
    },
    goal: {
        type: Number,
        required: true
    },

    notes: {
        notes: {
            type: String
        }
    },
    color: {
        type: String,
        enum: [`tomato, orange, dodgerblue, mediumseagreen, slateblue, violet, gray`],
        default: `orange`

    },

    image: {
        type: String,
        default: "https://img.discogs.com/KAHyZsGakLcw64EJAL7H1-8JSpM=/450x450/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2013868-1492186788-3478.png.jpg"
    },

    userTaby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})



module.exports = model("Habit", habitSchema)