const express=require("express");
const app=express();
const db=require('./db');
//const person=require('./../Models/personSchema');
const bodyparser=require('body-parser');

app.use(bodyparser.json())   //req.body


app.get('/', function (req, res) {
  res.send('this is port 4000')
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
app.listen(5000,()=>{
  console.log("listening to port 4000")
});
console.log("hi babe");

