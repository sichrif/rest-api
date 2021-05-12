const mastercsi = require('../models/masterCSI.model');

const addmastercsi = async function (req, res) {
    try {
        const csi = new mastercsi (req.body);
        await csi.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnemastercsi = async function (req, res) {
    try {
        const event = await mastercsi.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManymastercsi = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await mastercsi.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletemastercsi = async function (req, res) {
    try {
        const deletemastercsi = await mastercsi.findByIdAndDelete(req.params.id);
        deletemastercsi ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatemastercsi = async function (req, res) {
    try {
        console.log(req.body);
        const updatemastercsi = await mastercsi.findByIdAndUpdate(req.params.id, req.body);
        const status = updatemastercsi ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addmastercsi  , getOnemastercsi , getManymastercsi, deletemastercsi , updatemastercsi}
