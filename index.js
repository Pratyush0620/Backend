require('dotenv').config();
const express = require("express");
const app=express();
const port=3000;

app.get('/',(res,req)=>{
    res.send("Hello World");
});

app.get('/twitter',(res,req)=>{
    res.send("Pratyush.com");
});

app.get('/login',(res,req)=>{
    res.send("");
});

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
});