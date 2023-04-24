const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({

    exerciseName:{
        type:String,
        required:true,
    },

    exerciseId:{
        type:ObjectId,
        required:true,

    },

    exerciseLength:{
        type:Number,
        required:true,
    },
},{timestamps:true})

module.exports = mongoose.model("exercises",exercise)