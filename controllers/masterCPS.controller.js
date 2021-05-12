const mastercps = require('../models/masterCPS.model');

const addmastercps = async function (req, res) {
    try {
        const cps = new mastercps (req.body);
        await cps.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnemastercps = async function (req, res) {
    try {
        const event = await mastercps.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManymastercps = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await mastercps.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletemastercps = async function (req, res) {
    try {
        const deletemastercps = await mastercps.findByIdAndDelete(req.params.id);
        deletemastercps ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatemastercps = async function (req, res) {
    try {
        console.log(req.body);
        const updatemastercps = await mastercps.findByIdAndUpdate(req.params.id, req.body);
        const status = updatemastercps ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addmastercps  , getOnemastercps , getManymastercps, deletemastercps , updatemastercps}
