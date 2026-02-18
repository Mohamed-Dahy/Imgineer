require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/mongo');
const userRouter = require('./Routes/userRoutes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
