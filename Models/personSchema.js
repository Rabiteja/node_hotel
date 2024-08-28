const mongoose=require('mongoose');
const { type } = require('os');
const personSchemas=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
   
})
//creating person model
const person=mongoose.model('person',personSchemas)
module.exports=person;