const mongoose = require('mongoose')

const SponsorSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        maxLength: 50
    },
    companyEmail: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    whyToSponsor: {
        type: String,
        required: true,
    }
})

module.exports = SponsorModel = mongoose.model('Sponsors', SponsorSchema)