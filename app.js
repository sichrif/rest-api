const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const bcrypt =require('bcryptjs');
const AppError= require('./utils/appError')




app.use(bodyParser.json());
app.use('/api/users',userRoutes);
mongoose.connect(MONGODB,{useNewUrlParser:true})
.then(()=>{
console.log('connected to mongodb')
return app.listen(3300);
})
.then(()=>console.log('server running at 3300'))
.catch(err => console.log(err.message));