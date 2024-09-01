const mongoose=require('mongoose');
const { type } = require('os');
const personSchemas=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
   
})
//creating person model
const person=mongoose.model('person',personSchemas)
module.exports=person;