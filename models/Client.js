const mongoose = require('mongoose');

const { Schema } = mongoose;

const userschema = new Schema({
    username:{
        type:String,
        unique:true
        required:true
    },
    password:{
        type:String,
        unique:true
        required:true,
    }
    location:{
        type:String,
    },
    age:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model("Client", clientschema)