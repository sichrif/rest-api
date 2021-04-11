const Admin = require('../models/admin.js');

// Sign up an Admin { admin info => admin info ,token }
const register = async function (req, res) {
    const admin = new Admin(req.body);
    try {
        const token = await admin.generateAuthToken();
        admin.tokens.push({token});
        await admin.save();
        res.status(201).send({admin, token});
    } catch (error) {
        res.status(400).send();
    }
};

// Sign in Admin { email,password => admin info,token }
const login = async function (req, res)  {
    try {
        const admin = await Admin.findByCredentials(req.body.email, req.body.password);
        const token = await admin.generateAuthToken();
        admin.tokens.push({token});
        await admin.updateOne({tokens: admin.tokens});
        res.status(200).send({admin, token});
    } catch (error) {
        res.status(400).send({error: 'Unable to login'});
    }
};


module.exports = {register,login} ;