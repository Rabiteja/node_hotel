const mongoose=require('mongoose');
const mongoUrl='mongodb://127.0.0.1:27017/prthotels'




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
