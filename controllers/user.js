const User = require('./../models/user');
const jwt = require('jsonwebtoken');

const {SECRET_KEY}=require('./../config');
const bcrypt =require('bcrypt');
const user = require('./../models/user');
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY='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'
sgMail.setApiKey(SENDGRID_API_KEY);




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


exports.recover = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) return res.status(401).json({message: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

            let id = '1';

            let baseURL = 'http://localhost:3300/api/users/reset';
            let link = baseURL + '/' + id;

            // Save the updated user object

                    const mailOptions = {
                        to: user.email,
                        from: 'hamzaabda09@gmail.com',
                        subject: "Password change request",
                        text: `Hi  \n 
                    Please click on the following link to reset your password ${link}. \n\n 
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
                    };

                    sgMail.send(mailOptions, (error, result) => {
                        if (error) return res.status(500).json({message: error.message});

                        res.status(200).json({message: 'A reset email has been sent to ' + user.email + '.'});
                    });
                })
                .catch(err => res.status(500).json({message: err.message}));
     
};


exports.reset = (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Redirect user to form with the email address
            res.render('reset', {user});
        })
        .catch(err => res.status(500).json({message: err.message}));
};


// @route POST api/auth/reset
// @desc Reset Password
// @access Public
exports.resetPassword = (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Set the new password
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            // Save
            user.save((err) => {
                if (err) return res.status(500).json({message: err.message});

                // send email
                const mailOptions = {
                    to: user.email,
                    from: process.env.FROM_EMAIL,
                    subject: "Your password has been changed",
                    text: `Hi ${user.username} \n 
                    This is a confirmation that the password for your account ${user.email} has just been changed.\n`
                };

                sgMail.send(mailOptions, (error, result) => {
                    if (error) return res.status(500).json({message: error.message});

                    res.status(200).json({message: 'Your password has been updated.'});
                });
            });
        });
};