const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    Fname : {
        type:String,
        required:true, 
    },
    Lname : {
        type:String,
        required:true,
    },
    managerId : {
        type:String,
        required:true,
        unique:true
    },
    hostel : {
        type:String,
        required:true,
    },
    password : {
        type:String,
        required:true, 
    }
})

const Manager = new mongoose.model("Manager", managerSchema)
module.exports=Manager;