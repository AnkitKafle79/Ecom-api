const express = require('express');
const cors=require('cors');
// const { rmSync } = require('fs');
const productsAPIRoutes = require('./routes/productsapi');
const products = require('./data.json');


const app=express();
app.use(express.static(__dirname+'/public'));
app.use(cors());

app.get('/',(req,res) =>{
    res.send("Welcome  to E-Commerce website")
});
app.use('/api/products',productsAPIRoutes);

app.listen(4000,()=>{
    console.log("Server started in port 4000");
});