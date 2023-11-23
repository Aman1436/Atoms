const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    list : {
        type:Array,
        required: true
    }
}, {timestamps:true});

const Items = new mongoose.model("Items", itemsSchema);
module.exports = Items;