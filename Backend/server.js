const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/mongo');
require('dotenv').config();    
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})