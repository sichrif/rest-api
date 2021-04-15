const Admin = require('../models/admin.js');
const bcrypt = require('bcrypt');
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



// Update admin account { admin,authToken, updates body => updated admin }
const updateAccount = async function (req, res) {
    const updatesAllowed = ['name', 'email', 'password'];
    const updatesRequested = Object.keys(req.body);
    const isValidUpdated = updatesRequested.every((update) => {
        return updatesAllowed.includes(update);
    });
    if (!isValidUpdated) {
        return res.status(400).send({error: 'update is not valid'});
    }
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
            const currentTokenObject = req.admin.tokens.find((token) => {
                return token.token === req.token
            });
            const tokens = new Array();
            tokens.push(currentTokenObject);
            req.body.tokens = tokens;
        }
        await req.admin.updateOne(req.body, {new: true, runValidators: true});
        const updatedAdmin = await Admin.findById(req.admin._id);
        res.status(200).send(updatedAdmin);
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}



module.exports = {register,login,updateAccount} ;




