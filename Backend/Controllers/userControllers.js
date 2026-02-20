const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if(!name || !email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }
    if(password.length < 6){
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
        name, 
        email,
        password: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });


    res.status(201).json({
  success: true,
  token,
  user: newUser
});

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if(!email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.status(200).json({
  success: true,
  token,
  user: user
});

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const userCredits = async(req,res)=>{
  try{
    const {userId} = req.body;
  const user = await userModel.findById(userId);
  if(!user){
    return res.status(404).json({success: false, message : "User not found"});
  }
  res.status(200).json({success: true, creditBalance : user.creditBalance, user: user});
  }catch(error){
    console.error("Error fetching user credits:", error);
    res.status(500).json({success: false, message: "Server error" });
  }  
  
}

module.exports = { registerUser, loginUser , userCredits };