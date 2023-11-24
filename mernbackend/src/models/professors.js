const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
    Fname : {
        type:String,
        required:true, 
    },
    Lname : {
        type:String,
        required:true,
    },
    department : {
        type:String,
        required:true,
    },
    hostel : {
        type:String,
        required:true,
    },
    sex : {
        type:String,
        required:true,
    },
    profId : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true, 
    }
})

const Professor = new mongoose.model("Professor", professorSchema)
module.exports=Professor;