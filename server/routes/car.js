const router = require("express").Router();
const authMiddleWare = require("../middlewares/auth");
const Car = require("../models/Car");

//Car Registration

router.post('/registercar', authMiddleWare, async (req, res) => {
  try {
    const check = await Car.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ message: "Exist" });
    }
    const { fullName, city, state, postalCode, phoneNumber, email, model, year, color, licensePlate, imageBase64 } = req.body;
    const newCar = new Car({ fullName, city, state, postalCode, phoneNumber, email, model, year, color, licensePlate, imageBase64 })
    await newCar.save();
    res.status(200).json({ message: "Car Registration successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


// Reserve Car
router.post('/reservecar', authMiddleWare, (req, res) => {
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

module.exports = router;
