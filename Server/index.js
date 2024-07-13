require('dotenv').config()
const express = require('express')
const app = express()
const userRoutes = require('./router/auth-router');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');


mongoose.connect(`${process.env.MONGODB_URI}`)
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log('MongoDB Error '+ err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})