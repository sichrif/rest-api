const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =require('bcrypt');

const userSchema = new Schema ({
nom:{type:String,required:true},
prenom:{type:String, required:true},
email:{
    type:String,
    required:true,
    unique:true,
 
},
cin:{type:Number , required:true},
password:{type:String , required:true}

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
userSchema.methods.isPasswordValid = async function(value){
    
    try{
        return await bcrypt.compare(value,this.password);
    } catch(error){
        throw new Error(error);
    }
};




module.exports = mongoose.model('user',userSchema);