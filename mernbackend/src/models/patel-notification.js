const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    message : {
        type:String,
        required:true
    }
}, {timestamps:true});

const patelNotification = new mongoose.model("patelNotification", notificationSchema)
module.exports=patelNotification;