const mongoose = require('mongoose');

const { Schema } = mongoose;

const userschema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true,
    },
    interestedIn:{
        type:String,
    },
    searchGender:{
        type:String,
    },
    location:{
        type:String,
        default:"Private"
    },
    dob:{
        type:String,
    },
    age:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    superlikes:{
        type:Number,
        default:0,
    },
    matches:{
        type:Array,
        default:[]
    }
})



module.exports = mongoose.model("User", userschema)