const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    message : {
        type:String,
        required:true
    }
}, {timestamps:true});

const Notification = new mongoose.model("Notification", notificationSchema)
module.exports=Notification;