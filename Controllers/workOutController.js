const exerciseModel = require("../Models/exerciseModel.js")
const workOutModel = require("../Models/workOutModel.js")
const mongoose = require("mongoose");


//===================createWorkOut================//
const createWorkOut = async function (req,res){
    try{
        let data = req.body;
        let{programmeName, programmeId} = data;

        if(Object.keys(data).length==0){
            return res.status(400).send({status:false, message:"Please provide some data"})
        }

        if(!programmeName){
            return res.status(400).send({status:false, message:"Please provide programmeName"})
        }
        
        if(!programmeName.isValidName(name)){
            return res.status(400).send({status:"false", message:"Please provide programme"})
        }

        if(!programmeId){
            return res.status(400).send({status:"false", message:"Please provide programmeId"})
        }

        if(!isValidOjectId(programmeId)){
            return res.status(400).send({status:"false", message:"Please provide valid ObjectId"})
        }

        let savedData = await workOutModel.create(data);
        return res.status(201).send({ status: true, message: 'Success', data: savedData });
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
    }
}



//====================updateWorkOut=================//

const updateWorkOut = async function(req,res){
    try{
        let programmeId = req.params.programmeId
        let data = req.body
    
        if (!programmeId){
            return res.status(400).send({status:"false", message:"Please provide programmeId"})
        }

        if (Object.keys(data).length==0){
            return res.status(400).send({status:"false", message:"Please provide some data to update"})
        }

        if (!mongoose.isValidObjectId(programmeId)) {
            return res
              .status(400)
              .send({ status: false, message: "Enter valid bookId" });


          }

          let findBlogId = await programmeModel.findById(programmeId);

        if (findBlogId.isdeleted == true) {
            return res.status(404).send({ status: false, msg: "programme is deleted" })

        }

        let updateProgramme = await programmeModel.findOneAndUpdate({ _id: blogId }, {
            $set: {
                programme: data.programme,
                body: data.body,
               
            },
        })

        return res.status(200).send({ status: true, data: updatedProgramme });
        
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}





//=========================deleteWorkOut=================//

const deleteWorkOut = async function (req,res){

    try {
        let programmeId = req.params.programmeId;

        if (!programmeId)
            return res.status(404).send({ status: false, msg: 'programmeId is missing' })
    
        let programme = await workOutModel.findById({_id:programme})

        if(!programme){return res.status(404).send({ status: false, msg: "programmeid dont exit" })}

        if (programme.isdeleted==true) {
            return res.status(404).send({ status: false, msg: "programme is already deleted" })
        }
        
        await workOutModel.findOneAndUpdate({ _id: programmeId }, {
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


module.exports = {createWorkOut, updateWorkOut, deleteWorkOut};

    



        
    
