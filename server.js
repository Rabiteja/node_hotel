const express=require("express");
const app=express();
const db=require('./db');
//const person=require('./../Models/personSchema');
const bodyparser=require('body-parser');
require('dotenv').config();

app.use(bodyparser.json())   //req.body

const PORT=process.env.PORT  || 5000;

app.get('/', function (req, res) {
  res.send('this is port 5000')
})

// app.get('/hii', function (req, res) {
//   res.send('you triggered hii ');
// })

//importing the router
const Person_route=require('./routes/PersonRoutes');
const menuitem_route=require('./routes/manuItemRoutes');
//using the router
app.use('/person',Person_route);
app.use('/menuitem',menuitem_route);

app.listen(PORT ,()=>{
  console.log("listening to port 5000")
});
console.log("hi babe");

