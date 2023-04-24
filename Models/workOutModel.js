const mongoose = require("mongoose");

const workOut = new mongoose.Schema({
    
    workOutName:{
        type:String,
        required:true,
    },

    workOutId:{
        type:ObjectId,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    },

    deletedAt:{
        type:Date,
        default:null,
    },
},{timestamps:true})

module.exports = mongoose.model("workOuts",workOut)