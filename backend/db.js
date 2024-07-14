const mongoose = require('mongoose');

const mongoUri ="mongodb+srv://yashchougule108:%40Yashch@1008@cluster0.ipkmsxh.mongodb.net/"


const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoUri ,  () =>{
        console.log("connected to mongo")
    })
    
}

module.exports = connectToMongo;
