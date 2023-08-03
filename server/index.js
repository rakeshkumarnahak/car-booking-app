import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import collection from "../server/models/user-schema.js";

const app=express();
const PORT=process.env.PORT || 5005

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>res.send('Hello World!'))
app.listen(PORT,()=>console.log(`Node js Server Started in ${PORT}`))


app.post('/register',async(req,res)=>{
    try {
        const check=await collection.findOne({email:req.body.email})
        if(check){
            return res.status(400).json({message:"Exist"})
        }
            const {fname,lname,email,password,cpassword}=req.body;
            const newcollection=new collection({fname,lname,email,password,cpassword});
            await newcollection.save();
            res.status(200).json({ message: "Registration successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
    
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body
   try {
     const user=await collection.findOne({email,password})
     if(user){
        res.status(200).json({message:"Login Successful",user: { fname: user.fname } })
     }
     else{
        res.status(401).json({message:"User not found"})
     }
   } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
   }
});
const CONNECTION_URL="mongodb+srv://admin:admin@car-booking-app.3zo7vws.mongodb.net/?retryWrites=true&w=majority";
const connectToDatabase = async () => {
    try {
      await mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true });
      console.log("Database connected successfully");
    } catch (error) {
      console.log('Error while connecting with the database', error.message);
    }
  };
  
  connectToDatabase();