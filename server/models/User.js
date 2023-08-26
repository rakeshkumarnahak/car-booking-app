const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema);
