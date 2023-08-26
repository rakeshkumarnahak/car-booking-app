import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import session from 'express-session'; // Import session
import collection from "../server/models/user-schema.js"; // Assuming you have this imported properly
import Car from "./models/car-schema.js";

const app = express();
const PORT = process.env.PORT || 5005;
``
app.use(cors());
app.use(express.json());

app.use(session({
  secret: 'admin', // Secret key used to encrypt session data
  resave: false,
  saveUninitialized: true
}));

// Connect to MongoDB
const CONNECTION_URL = "mongodb+srv://admin:admin@car-booking-app.3zo7vws.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log('Error while connecting with the database', error.message));

app.get('/', (req, res) => res.send('Hello World!'));

// User Registration
app.post('/register', async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ message: "Exist" }); // User already exists
    }
    const { fname, lname, email, password, cpassword } = req.body;
    const newcollection = new collection({ fname, lname, email, password, cpassword });
    await newcollection.save();
    res.status(200).json({ message: "Registration successful" }); // Registration successful

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" }); // Internal server error
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email, password });
    if (user) {
      req.session.user = user; // Store user data in session
      res.status(200).json({ message: "Login Successful", user: { fname: user.fname } }); // Login successful
    } else {
      res.status(401).json({ message: "User not found" }); // User not found
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" }); // Internal server error
  }
});

// User Logout
app.post('/logout', (req, res) => {
  // Clear user data from session
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Logout Failed' }); // Logout failed
    } else {
      res.json({ message: 'Logged out successfully' }); // Logout successful
    }
  });
});

//Car Registration

app.post('/registercar', async (req, res) => {
try {
  const check=await Car.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({ message: "Exist" });
  }
  const {fullName,city,state,postalCode,phoneNumber,email,model,year,color,licensePlate,imageBase64}=req.body;
  const newCar=new Car({fullName,city,state,postalCode,phoneNumber,email,model,year,color,licensePlate,imageBase64})
  await newCar.save();
  res.status(200).json({ message: "Car Registration successful" });
} catch (error) {
  console.log(error);
  res.status(500).json({ message: error.message });
}
});
// Reserve Car
app.post('/reservecar', (req, res) => {
  const { carName } = req.body;
  if (req.session.user) {
    // Assuming user is logged in
    const user = req.session.user;
    // Assuming user.cars is an array in the user model where you can store reserved cars
    user.cars.push({ carName });
    user.save();
    res.status(200).json({ message: "Car reserved successfully" });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

// API to Fetch User Data (assuming user is authenticated)
app.get('/user', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user); // Return user data
  } else {
    res.status(401).json({ message: 'Not authenticated' }); // User not authenticated
  }
});

// Add similar route to fetch car data

app.listen(PORT, () => console.log(`Node js Server Started in ${PORT}`));