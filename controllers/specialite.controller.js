const specialite = require('../models/specialite.model');

const addSPECIALITE = async function (req, res) {
    try {
        const specialite = new specialite(req.body);
        await specialite.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOneSPECIALITE = async function (req, res) {
    try {
        const event = await specialite.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManySPECIALITE = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await specialite.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deleteSPECIALITE = async function (req, res) {
    try {
        const deletedSPECIALITE = await specialite.findByIdAndDelete(req.params.id);
        deletedSPECIALITE ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updateSPECIALITE = async function (req, res) {
    try {
        console.log(req.body);
        const updatedSPECIALITE = await specialite.findByIdAndUpdate(req.params.id, req.body);
        const status = updateSPECIALITE ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addSPECIALITE , getOneSPECIALITE, getManySPECIALITE, deleteSPECIALITE , updateSPECIALITE}
