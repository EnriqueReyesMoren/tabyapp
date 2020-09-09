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
        enum: ['build', 'quit'],
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
        enum: [`tomato`, `orange`, `dodgerblue`, `mediumseagreen`, `slateblue`, `violet`, `gray`],
        default: 'orange',
    },

    image: {
        type: String
    },

    userTaby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})



module.exports = model("Habit", habitSchema)