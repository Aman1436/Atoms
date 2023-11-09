const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Mess-Relay")
.then(()=>{
    console.log("Connection successful :)");
}) .catch((e)=>{
    console.log(e);
    console.log("Connection failed :(")
})