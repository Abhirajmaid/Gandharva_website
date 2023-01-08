const mongoose = require('mongoose');
const validate = require('validator');
const userregister = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:  true,
    },
    phone:{
        type: Number,
        reuired: true
    },
    date:{
       type: String,
        
    },
    clgname:{
        type: String,
        required: true
    },
   
    event:{
        type:  String,
        required: true
    },
    transid:{
        type: String,
        unique: true,
        required: true
    },
    transss:{
        type: String,
        required: true
    }
});

const UserRegistration = mongoose.model("UserRegistration",userregister);
module.exports = UserRegistration;