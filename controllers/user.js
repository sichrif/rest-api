const User = require('./../models/user');
const jwt = require('jsonwebtoken');

const {SECRET_KEY}=require('./../config');
const bcrypt =require('bcrypt');

exports.register = async (req,res,next)=>{
    const {nom,prenom,email,cin,password}=req.body;
    const user = await User.findOne({email});
    if(user)
    return res.status(403).json({error:{message:'Email already in use!'}});
    const newUser = new User({nom,prenom,email,cin,password});
    await newUser.save();
res.status(200).json({message:'success'});
};
exports.login=async(req,res,next)=>{
    const {email,password}=req.body;
    const user =await User.findOne({email});
    await bcrypt.compare(user.password,password)
    console.log(password);
    console.log(user.password);
    console.log(test);

    res.send(test);
    // if(!user)
    // return res.status(403).json({error:{message:'invalid email/password'}});
    // const isValid = await user[0].isPasswordValid(password);
    // if(!isValid)
    // return res.status(403).json({error:{message:'invalid email/password'}});
    // res.status(200).json({message:'success'});
};