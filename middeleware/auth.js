const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');



const Admin = async function (req, res, next) {
    try {
        const token = req.header('Authorization');
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        const admin = await Admin.findOne({_id: decode.id, 'tokens.token': token});
        if (admin){
            req.admin = admin;
            req.token = token;
            next();
        }else {
            throw new Error();
        }
    }catch (error) {
        res.status(401).send({error : 'please authenticate as admin'});
    }
}

module.exports = {authAdmin};
