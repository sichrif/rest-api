const nodemailer = require('nodemailer');
const express = require('express');
const app = express();





app.post('/', async (req, res) => {

    const { error } = validateEmail.validate(req.body);
    if (error) return res.send(error.message);

    const mail = {
        senderName: req.body.senderName,
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text
    }
    send(mail).catch(console.error);
    res.send('sent!');
});

async function send(mail) {
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
        subject: mail.subject,
        text: mail.senderName + '\n' + mail.from + '\n\n' + mail.text
    });
}


// module.exports = sendEmail;