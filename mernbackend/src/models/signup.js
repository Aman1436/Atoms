const mongoose = require("mongoose");
const bcrypt=require('bcryptjs');
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


studentSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,11);
        this.Cpassword= await bcrypt.hash(this.Cpassword,11);
    }
    next();
})

const Student = new mongoose.model("Student", studentSchema)
module.exports=Student;
