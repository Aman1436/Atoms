const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Fname : {
        type:String,
        required:true, 
    },
    Lname : {
        type:String,
        required:true,
    },
    regNo :{
        type:String,
        required:true,
        unique:true
    },
    hostel : {
        type:String,
        required:true, 
    },
    branch : {
        type:String,
        required:true, 
    },
    roomNo : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true, 
    },
    Cpassword : {
        type:String,
        required:true, 
    }
})

const Student = new mongoose.model("Student", studentSchema)
module.exports=Student;