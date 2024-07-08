const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type: Number
    },
    address:{
        city: String
    },
    role:{
        type:String,
        default:"user"
    }
})

module.exports = mongoose.model('User',userSchema)