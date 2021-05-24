const result = require('../models/resultat.model');

const addresult = async function (req, res) {
    try {
        const notes = new result (req.body);
        await notes.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOneresult = async function (req, res) {
    try {
        const event = await result.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManyresult = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await result.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deleteresult = async function (req, res) {
    try {
        const deleteresult  = await result.findByIdAndDelete(req.params.id);
        deleteresult  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updateresult = async function (req, res) {
    try {
        console.log(req.body);
        const updateresult = await result.findByIdAndUpdate(req.params.id, req.body);
        const status = updateresult ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addresult ,  getOneresult,getManyresult, deleteresult , updateresult}
