const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{dbname : "Imgineer_database"});
    console.log("Database Connected ...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
   
  }
};

module.exports = connectDB;