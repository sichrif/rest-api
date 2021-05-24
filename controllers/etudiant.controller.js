const student = require('../models/etudiant.model');

const addstudent = async function (req, res) {
    try {
        const eleve = new student (req.body);
        await eleve.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
}

const getOnestudent = async function (req, res) {
    try {
        const event = await student.findById(req.params.id);
        event ? res.status(200).send(event) : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const getManystudent = async function (req, res) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await student.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

const deletestudent = async function (req, res) {
    try {
        const deletestudent  = await student.findByIdAndDelete(req.params.id);
        deletestudent  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

const updatestudent = async function (req, res) {
    try {
        console.log(req.body);
        const updatestudent = await student.findByIdAndUpdate(req.params.id, req.body);
        const status = updatestudent ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

module.exports = {addstudent ,  getOnestudent,getManystudent, deletestudent , updatestudent}
