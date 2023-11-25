const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Mess-Relay")
.then(()=>{
    console.log("Connection successful :)");
}) .catch((e)=>{
    console.log(e);
    console.log("Connection failed :(")
})