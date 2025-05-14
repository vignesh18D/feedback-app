const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Database/DB');
const feedbacks = require('./routes/feedbackRoutes');
const cors = require('cors');

const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
//api
app.use("/api/feedback", feedbacks);



app.listen(port, () => {
    console.log(`Server Running in port ${port}`)
    connectDB();
})