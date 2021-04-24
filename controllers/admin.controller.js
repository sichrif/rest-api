const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const ComingEvent = require('../models/evenement.model');
const User = require('../models/user');






const register = async function (req, res) {
    const admin = new Admin(req.body);
    try {
        const token = await admin.generateAuthToken();
        admin.tokens.push({token});
        await admin.save();
        res.status(201).send({admin, token});
    } catch (error) {
        res.status(400).send();
    }
};


const login = async function (req, res)  {
    try {
        const admin = await Admin.findByCredentials(req.body.email, req.body.password);
        const token = await admin.generateAuthToken();
        admin.tokens.push({token});
        await admin.updateOne({tokens: admin.tokens});
        res.status(200).send({admin, token});
    } catch (error) {
        res.status(400).send({error: 'Unable to login'});
    }
};





const addEvent = async function (req, res) {
    try {
        const comingEvent = new ComingEvent(req.body);
        await comingEvent.save();
        res.status(200).send();
    } catch (error) {
        res.status(400).send({error: error.toString()});
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
        console.log(req.body);
        const updatedEvent = await ComingEvent.findByIdAndUpdate(req.params.id, req.body);
        const status = updatedEvent ? 200 : 404;
        res.status(status).send();
    }catch (e) {
        res.status(400).send();
    }
}

const adduser = async function (req,res) {
    const clientID = new user(req.body);
    try {
        await User.save();
        res.status(200).send();
    }catch(e){
        res.status(400).send();
    }
}

const getAlluser = async function(req,res){
    try{
        const user = await User.find();
        res.status(200).send(users);
    }catch (e) {
        res.status(500).send();
    }
}

module.exports = {register,login,addEvent, getOneEvent, getManyEvents, deleteEvent , updateEvent, adduser , getAlluser} ;




