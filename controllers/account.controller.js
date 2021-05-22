const account = require('../models/account.model');

const addaccount = async function (req, res) {
    try {
        const compte = new account (req.body);
        await compte.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOneaccount = async function (req, res) {
    try {
        const account = await account.findById(req.params.id);
        event ? res.status(200).send(account) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManyaccount = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await course.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deleteaccount = async function (req, res) {
    try {
        const deleteaccount  = await course.findByIdAndDelete(req.params.id);
        deleteaccount  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updateaccount = async function (req, res) {
    try {
        console.log(req.body);
        const updateaccount = await account.findByIdAndUpdate(req.params.id, req.body);
        const status = updatecours ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addaccount ,getOneaccount,getManyaccount, deleteaccount , updateaccount}
