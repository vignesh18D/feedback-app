const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("DataBase Connected");
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB;