const express=require('express');
const router=express.Router();
const person=require('./../Models/personSchema');
const { json } = require('body-parser');

router.post('/',async(req,res)=>{
    try{
     const data=req.body;
     const newperson=new person(data);
     const response = await newperson.save();
     console.log("data saved");
     res.status(200).json(response);
    }catch(err)
      {
       console.log("error");
       res.status(500).json({Error:"internal server error"});
       }
  });
  router.get('/', async  (req,res)=>{
    try{
      const data= await person.find();
       console.log("data fetched");
       res.status(200).json(data);
    }catch(err){
      console.log("error");
      res.status(500).json({Error:"internal server error"}); 
    }
  })
  //parameterized api call
router.get('/:workType',async(req,res)=>{
    try{
      //extracting the work type from route
      const workType=req.params.workType;
      if (workType=='waiter'|| workType=='manager'||workType=='chef') {
      const response= await person.find({work:workType})
      console.log("data fetched");
      res.status(200).json(response);
      }else{
        console.log("invalid work type");
      }
    }catch(err){
      console.log("error");
      res.status(404).json({Error:" error in fetching"}); 
    }
    
  })
  router.put('/:id',async(req,res)=>{
    try{
        const person_id=req.params.id;//extracting the id from the request
        const Person_data=req.body;//extracting the data from the request ie url
        const response= await person.findByIdAndUpdate(person_id,Person_data,{
            new:true,//return the updated document
            runValidators:true,//run mongoose validationn,
        });
        if ( !response) {
            return res.status(404).json({err:'person not found'});
        }
       console.log('data updated');
       res.status(200).json(response);
    }catch(err){
        console.log("error");
        res.status(500).json({Error:"internal server error"}); 
    }
    
  })
  

  module.exports=router;
  