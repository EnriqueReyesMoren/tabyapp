const { Schema, model } = require("mongoose")

const habitSchema = new Schema(
    {
        name:{
            type: String,
            trim: true,
            required: [true, "Your habit needs a name!"],
            unique: true
        },
        intention: {
            type: String,
            enum: ['Build','Quit'],
            required: true
        },
        goal: {
            type: Number,
            required: true
        },
        notes: {
            notes: {
                type: String
                }
        }

    },
{
    timestamps: true
}
)



module.exports = model("Habit", habitSchema)