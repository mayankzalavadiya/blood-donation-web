const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected To mongoDB database ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch(error){
        console.log(`MongoDB database error ${error}`.bgRed.white)
    }
}

module.exports = connectDB;