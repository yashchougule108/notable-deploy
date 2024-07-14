const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://sanchit339:%40Sanchit1008@cluster0.ipkmsxh.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoUri ,  () =>{
        console.log("connected to mongo")
    })
    
}

module.exports = connectToMongo;
