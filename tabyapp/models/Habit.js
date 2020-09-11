const { Schema, model } = require("mongoose")

const habitSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Your habit needs a name!"],

    },
    intention: {
        type: String,
        enum: ['build', 'quit'],
        required: true
    },

    unit: {
        type: String,
        enum: ['calories', 'dollars', 'hours', 'wellness']
    },
    goal: {
        type: Number,
        required: true
    },

    notes: String,
    color: {
        type: String,
        enum: [`tomato`, `orange`, `dodgerblue`, `mediumseagreen`, `slateblue`, `violet`, `gray`],
        default: 'orange',
    },

    image: {
        type: String
    },

    tracker: [Number],

    userTaby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})



module.exports = model("Habit", habitSchema)