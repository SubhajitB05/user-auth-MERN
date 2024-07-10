const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const userRoutes = require('./router/auth-router');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');

const uri = 'mongodb+srv://subhajitbarman2000:5pfWce6GDQgo9uwL@cluster0-user-auth.shk1pku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-user-auth'
// const uri = 'mongodb://127.0.0.1:27017/user-auth2';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log('MongoDB Error '+ err));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})