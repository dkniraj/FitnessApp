const express = require("express");
const bodyparser = require("body-parser");
const route = require(".routes/route.js");
const mongoose = require("mongoose");



const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
("UseNewUrlParser:true")

mongoose.connect("mongodb+srv://PoojaFunctionUp:PA44yjApvizLJGOY@cluster0.newxzkv.mongodb.net/PoojaDb-1508?retryWrites=true&w=majority")
.then(() => console.log ("mongodb is connected"))
.catch(error => console.log(error))

app.use("/",route())

app.listen(process.env.PORT || 5000, function(){
    console.log("express app is running on port" + process.env.PORT || 3000)
});