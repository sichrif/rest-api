const User = require('./../models/user');
const jwt = require('jsonwebtoken');

const {SECRET_KEY}=require('./../config');
const bcrypt =require('bcrypt');
const user = require('./../models/user');
// const sendEmail=require('./../emails/account');
const nodemailer = require('nodemailer')





exports.register = async (req,res,next)=>{
  
   
    const {nom,prenom,email,cin,password}=req.body;
    const user = await User.findOne({email,cin});
    if(user)
    return res.status(403).json({error:{message:'Email or cin already in use!'}});
    const newUser = new User({nom,prenom,email,cin,password});
    await newUser.save();
res.status(200).json({message:'success'});

};




exports.login=async(req,res,next)=>{
    const {email,password}=req.body;
    const user =await User.findOne({email});
    const isValid = await bcrypt.compare(password, user.password);
    // password then hash
    
    console.log(password);
    console.log(user.password);
    console.log(isValid);
    
    if(!user)
    return res.status(403).json({error:{message:'invalid email/password'}});
    
    if(!isValid)
        return res.status(403).json({error:{message:'invalid email/password'}});
    const token = user.generateAuthToken();
    res.status(200).json({token});
};

getSignedToken = user => {
    return jwt.sign({
        nom: user.nom,
        prenom:user.prenom,
        email: user.email,
        password: user.password,
        cin: user.cin
    }, SECRET_KEY, { expiresIn: '1h' });
};




// ===PASSWORD RECOVER AND RESET





exports.forgotPassword = async(req,res,next)=>{
//     const user = await User.findOne({email:req.body.email});
// if (!user){
//     return ('there is no user with email address.',404);
// }

// const resettoken =user.createpasswordresettoken();
// await user.save({validateBeforeSave:false})

// const resetURL ='${req.protocol}://${req.get(host)}/http://localhost:3300/api/users/forgotPassword/${resetToken}';

// const message='forgot your password? submit a patch request with your new password and passwordConfirm to :${resetURL} ';

// try{
// await sendEmail({
//     email:user.email,
//     subject:'your password reset token(valid for 10 min)',
//     message
// });
// res.status(200).json({
//     status :'success',
//     message:'token sent to email'
//    });


// }catch(err){
//     user.resetPasswordtoken= undefined;
//     user.resetPasswordexpires=undefined;
//     await user.save({validateBeforeSave:false});

    

//     }



    // const mail = {
    //     senderName: req.body.senderName,
    //     from: req.body.from,
    //     subject: req.body.subject,
    //     text: req.body.text
    // }
    send().catch(console.error);
    res.send('sent!');



};

async function send() {
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: 'hamzaabda09@outlook.com',
            pass: 'Azerty123456+',
        },
        tls: {
            ciphers: 'SSLv3'
        },
    });

    let info = await transporter.sendMail({
        from: 'hamzaabda09@outlook.com',
        to: 'hamzaabda500@gmail.com',
        subject: 'test one two three',
        text: 'test one two three'
    });
}


exports.resetPassword = async (req, res) => {
   
    const hashedtoken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    
    const user =await User.findOne({passwordresettoken:hashedtoken,passwordresetexpires:{$gt:
    Date.now()}});
    
    if(!user){
        return next(newAppError('token is invalid or has expired',400))
    }
    user.password = req.body.password;
    user.passwordconfirm = req.body.passwordconfirm;
    user.passwordresettoken=undefined;
    user.passwordresetexpires=undefined;
    await user.save();
    
    const token =getSignedToken (user._id);
    res.status(200).json({
        status:'succes',
        token
    });
}
exports.updatePassword = async (req,res,next)=>{
const user = await User.findById(req.user.id).select('+password')
if (!(await user.correctPassword(req.body.passwordconfirm,user.password))){
    return ('your current password is wrong',401);
}
user.password = req.bod.password;
user.passwordconfirm= req.body.passwordconfirm;

await user.save();



}