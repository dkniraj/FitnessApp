const express = require("express");
const router = express.Router();
const workOutController = require("../controllers/workOutController.js");
const exerciseController = require("../controllers/exerciseController.js");
const router = require("/routes/route.js")

//=================workOutApi's======================

router.post('/workOuts', workController.createWorkOut);
router.put('/workOuts/:workOutId', workOutController.updateWorkouts)
router.delete('/workOuts/:workOutId',workOutController.deleteWorkOut)

//================exerciseApi's=======================

router.post('/exercises', exerciseController.createExercises)
router.post('/exercises:exerciseId',exerciseController.deleteExercise)

module.exports = router;