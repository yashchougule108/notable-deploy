const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://yashchougule108:Yashch@1008@cluster0.fuoq0pt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(mongoUri ,  () =>{
        console.log("connected to mongo")
    })
    
}

module.exports = connectToMongo;
