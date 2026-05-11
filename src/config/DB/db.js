const mongoose = require("mongoose");

const connectdb = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.error("Error connecting to DB", err);
    });

}

module.exports = connectdb;