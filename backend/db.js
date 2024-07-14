const mongoose = require('mongoose');

const mongoUri ="mongodb+srv://yashchougule108:<password>@cluster0.fuoq0pt.mongodb.net/"


const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoUri ,  () =>{
        console.log("connected to mongo")
    })
    
}

module.exports = connectToMongo;
