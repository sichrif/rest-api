var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hamzaabda09@gmail.com',
    pass: 'hamza abda 99407555'
  }
});

var mailOptions = {
  from: 'outlook_304D41AF57F81215@outlook.com',
  to: 'hamzaabda09@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports=sendEmail;