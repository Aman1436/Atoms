const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    message : {
        type:String,
        required:true
    }
}, {timestamps:true});

const tilakNotification = new mongoose.model("tilakNotification", notificationSchema)
module.exports=tilakNotification;