const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }

}, {timestamps:true})

const userModel = mongoose.model('user', Schema);

module.exports = userModel;