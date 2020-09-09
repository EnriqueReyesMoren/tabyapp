const { Schema, model } = require("mongoose")

const moodSchema = new Schema({
  mood:{
    type: String,
    enum: ['Excited','Happy','Sad','Neutral','Anxious']
  },
  scale:{
    type: Number,
    enum: [1,2,3,4,5]
  }
},
{
  timestamps: true
})



module.exports = model("Mood", moodSchema)