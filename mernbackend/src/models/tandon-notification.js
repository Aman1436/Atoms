const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    message : {
        type:String,
        required:true
    }
}, {timestamps:true});

const tandonNotification = new mongoose.model("tandonNotification", notificationSchema)
module.exports=tandonNotification;