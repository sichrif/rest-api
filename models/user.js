const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_key } = require('../config');
const crypto = require('crypto');

const userSchema = new Schema ({
nom:{type:String,required:true},
prenom:{type:String, required:true},
email:{
    type:String,
    required:true,
    unique:true,
 
},
cin:{type:Number , required:true},
password:{type:String , required:true},


});
userSchema.pre('save',async function(next){
try{
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password ,salt);
    console.log(passwordHash);
this.password = passwordHash;
next();
}catch(error){
    next(error);
}
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ nom: this.nom, prenom: this.prenom }, SECRET_key);
}

userSchema.methods.isPasswordValid = async function(value){
    
    try{
        return await bcrypt.compare(value,this.password);
    } catch(error){
        throw new Error(error);
    }
};

// userSchema.pre('save',  function(next) {
//     const user = this;

//     if (!user.isModified('password')) return next();

//     bcrypt.genSalt(10, function(err, salt) {
//         if (err) return next(err);

//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);

//             user.password = hash;
//             next();
//         });
//     });
// });


userSchema.methods.generatePasswordReset = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};













module.exports = mongoose.model('user',userSchema);