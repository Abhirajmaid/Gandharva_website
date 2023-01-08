const mongoose = require('mongoose');

const sponserSchema = mongoose.Schema({
    comname:{
        type: String,
        required: true
    },
    comemail:{
        type: String,
        required: true,
        unique:  true,
    },
    comphone:{
        type: Number,
        reuired: true
    },
    message:{
        type:String,
    }
});

const SponsersRegister = mongoose.model("SponsersRegister",sponserSchema);
module.exports = SponsersRegister; 