const { Schema, model } = require("mongoose")

const moodSchema = new Schema({
    mood: {
        type: String,
        enum: ['excited', 'happy', 'sad', 'neutral', 'anxious']
    },
    scale: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    happy: {
      type: Number,
      default: 0
    },
    anxious: {
      type: Number,
      default: 0
    },
    sad: {
      type: Number,
      default: 0
    },
    neutral: {
      type: Number,
      default: 0
    },
    excited: {
      type: Number,
      default: 0
    },
    userTaby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    note: String
}, {
    timestamps: true
})



module.exports = model("Moods", moodSchema)