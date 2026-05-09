const mongoose = require('mongoose');

const db = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database is connected!!!");
    }catch(err){
        console.log(`Error occured while connecting to DB: ${err}`)
    }
}

module.exports = db;    