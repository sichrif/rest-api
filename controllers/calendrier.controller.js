const calendrier = require('../models/calendrier.model');

const addcalendrier = async function (req, res) {
    try {
        const cal = new calendrier (req.body);
        await cal.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnecalendrier = async function (req, res) {
    try {
        const calendrier = await calendrier.findById(req.params.id);
        event ? res.status(200).send(calendrier) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManycalendrier = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await calendrier.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletecalendrier = async function (req, res) {
    try {
        const deletecalendrier = await calendrier.findByIdAndDelete(req.params.id);
        deletecalendrier  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatecalendrier = async function (req, res) {
    try {
        console.log(req.body);
        const updatecalendrier = await calendrier.findByIdAndUpdate(req.params.id, req.body);
        const status = updatecalendrier ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addcalendrier ,getOnecalendrier,getManycalendrier, deletecalendrier , updatecalendrier}
