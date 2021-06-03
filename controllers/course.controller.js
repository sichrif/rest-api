const course = require('../models/course.model');

const addcours = async function (req, res) {
    try {
        const cours = new course(req.body);
        cours.path = req.file.path;
        await cours.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnecours = async function (req, res) {
    try {
        const event = await course.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManycours = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await course.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletecours = async function (req, res) {
    try {
        const deletecours  = await course.findByIdAndDelete(req.params.id);
        deletecours  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatecours = async function (req, res) {
    try {
        req.body.path = req.file.path;
        const updatecours = await course.findByIdAndUpdate(req.params.id, req.body);
        const status = updatecours ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {
    addcours,
    getOnecours,
    getManycours,
    deletecours,
    updatecours
}
