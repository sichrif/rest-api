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
password:{type:String , required:[true,'please confirm your password'],
validator:function(el){
  return el === this.password;
},
message:'passwords are not the same'
},
passwordchangeat:Date,
passwordresettoken:String,
passwordresetexpires:Date

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




userSchema.methods.createpasswordresettoken = function() {
   const resettoken =crypto.randomBytes(32).toString('hex');
   crypto.createHash('sha256').update(resettoken).digest('hex');
this.passwordresettoken= crypto

.createHash('sha256')
.update(resettoken)
.digest('hex');

console.log({resettoken},this.passwordresettoken);


this.passwordresetexpires= Date.now()+10*60*1000;

return resettoken;


};













module.exports = mongoose.model('user',userSchema);
