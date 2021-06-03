const ComingEvent = require('../models/evenement.model');



const addEvent = async function (req, res) {
    try {
        req.body.file = req.file.path;
        const comingEvent = new ComingEvent(req.body);
        await comingEvent.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({ error: error.toString() });
    }
}

const getOneEvent = async function (req, res) {
    try {
        const event = await ComingEvent.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManyEvents = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await ComingEvent.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deleteEvent = async function (req, res) {
    try {
        const deletedEvent = await ComingEvent.findByIdAndDelete(req.params.id);
        deletedEvent ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updateEvent = async function (req, res) {
    try {
        req.body.file = req.file.path;
        const updatedEvent = await ComingEvent.findByIdAndUpdate(req.params.id, req.body);
        const status = updatedEvent ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addEvent, getOneEvent, getManyEvents, deleteEvent , updateEvent}
