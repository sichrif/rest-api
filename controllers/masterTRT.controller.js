const mastertrt = require('../models/masterTRT.model');

const addmastertrt = async function (req, res) {
    try {
        const trt = new mastertrt (req.body);
        await trt.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnemastertrt = async function (req, res) {
    try {
        const event = await mastertrt.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManymastertrt = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await mastertrt.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletemastertrt = async function (req, res) {
    try {
        const deletemastertrt = await mastertrt.findByIdAndDelete(req.params.id);
        deletemastertrt ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatemastertrt = async function (req, res) {
    try {
        console.log(req.body);
        const updatemastertrt = await mastertrt.findByIdAndUpdate(req.params.id, req.body);
        const status = updatemastertrt ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addmastertrt  , getOnemastertrt , getManymastertrt, deletemastertrt , updatemastertrt}
