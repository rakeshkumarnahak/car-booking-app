import mongoose from "mongoose"
const newSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim: true,
        min: 5,
        max: 20
    },
    lname:{
        type:String,
        required:true,
        trim: true,
        min: 5,
        max: 20
    },
    email:{
        type:String,
        required:true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

export default collection;
