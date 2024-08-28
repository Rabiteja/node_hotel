const express=require('express');
const router=express.Router();
const menuitem=require('./../Models/menuItem');
const { findByIdAndUpdate } = require('../Models/personSchema');

router.post('/',async(req,res)=>{
    try{
     const data=req.body;
     const newMenuItem=new menuitem(data);
     const response = await newMenuItem.save();
     console.log("menu data saved");
     res.status(200).json(response);
    }catch(err)
      {
       console.log("error");
       res.status(500).json({Error:"internal server error"});
       }
  });
  router.get('/', async  (req,res)=>{
    try{
      const data= await menuitem.find();
       console.log("data fetched");
       res.status(200).json(data);
    }catch(err){
      console.log("error");
      res.status(500).json({Error:"internal server error"}); 
    }
  })
  //modified
  //for checking purpose
  module.exports=router;