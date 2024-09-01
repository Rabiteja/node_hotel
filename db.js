const mongoose=require('mongoose');
require('dotenv').config();
//const mongoUrl='mongodb://127.0.0.1:27017/prthotels'
//const mongoUrl='mongodb+srv://rebelravi2870:rabi2870A@cluster0.09ozw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 
//const mongoUrl = "mongodb+srv://rebelravi2870:rabi2870@cluster0.09ozw.mongodb.net/"
const mongoUrl=process.env.Mongo_Url;


mongoose.connect(mongoUrl);
//mongoose maintain a default connection object representing the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongodb server")
})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb server")
})
db.on('error',(err)=>{
    console.log("error in connecting  to mongodb server")
})
module.exports=db;
