const exerciseModel = require("../Models/exerciseModel.js")
const workOutModel = require("../Models/workOutModel.js")
const mongoose = require("mongoose");


//==================createExercises===============//

const createExercises = async function(req,res){
    try{
        let data = req.body
        let {exerciseName, exerciseId} = data

        if (Object.keys(data).length == 0){
            return res.status(400).send({status:"false", message:"please provide some data"})
    }

   
    if (!exerciseName){
        return res.status(400).send({status:"false", message:"Please provide exercise name"})
    }

    if (!exerciseName.isValidName(name)){
        return res.status(400).send({status:"false", message:"Please provide valid name"})
    }

    if(!exerciseId){
        return res.status(400).send({status:"false", message:"Please provide exerciseId"})
    }

    if(!isValidObjectId(exerciseId)){
        return res.status(400).send({status:"false", message:"Please provide valid exerciseId"})
    }

    let savedData = await exerciseModel.create(data)
        return res.status(201).send({ status: true, message: 'Success', data: savedData });
    } catch (err) {
       return res.status(500).send({ status: false, msg: err.message });
    }
}

//=====================deleteExercises=================//

const deleteExercises = async function (req,res){

    try {
        let exerciseId = req.params.exerciseId;

        if (!exerciseId)
            return res.status(404).send({ status: false, msg: 'exericseId is missing' })
    
        let exercise = await workOutModel.findById({_id:exercise})

        if(!exercise){return res.status(404).send({ status: false, msg: "exerciseid dont exit" })}

        if (exercise.isdeleted==true) {
            return res.status(404).send({ status: false, msg: "exercise is already deleted" })
        }
        
        await exerciseModel.findOneAndUpdate({ _id: exerciseId }, {
            $set: {
                deletedAt: new Date(),
                isdeleted: true,
            }
        },
            { new: true, upsert: true },
        );

        return res.status(200).send({status:true,msg: "deleted succesfully"})
        
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


module.exports = {createExercises, deleteExercises};

    



        
    










