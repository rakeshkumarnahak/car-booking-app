const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,

    },
    color: {
        type: String,
        required: true,
    },
    licensePlate: {
        type: String,
        required: true,

    },
    imageBase64: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', CarSchema);