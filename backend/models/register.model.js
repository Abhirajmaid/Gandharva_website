const mongoose = require('mongoose')

const EventRegSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    transactionSS: {
        type: String,
        required: true
    }
});

module.exports = EventRegModel = mongoose.model('event-registrations', EventRegSchema)