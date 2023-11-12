const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    complaint: {
        type:String,
        required:true,
    },
    regNo : {
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        default:0
    }
});
const Complaint = new mongoose.model("Complaint", complaintSchema)
module.exports=Complaint;