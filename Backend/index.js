const express= require('express');
const app=express();
const port=process.env.port||4000;
const connect=require('./config/database.js')
app.get('/',(req,res)=> res.send('here we go')

);


connect();
app.listen(port)

