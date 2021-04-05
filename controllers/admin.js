const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const { Admin, validateAdmin } = require('../../models/admin');


router.get('/', async (req, res) => {
    res.send(await Admin.find());
});

router.get('/:id', async (req, res) => {
    const id = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!id) return res.status(400).send("invalid id.");

    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send("admin not found.");

    res.send(await Admin.findById(req.params.id));
});

router.post('/', async (req, res) => {
    const { error } = validateAdmin.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let admin = await Admin.findOne({ Email: req.body.Email });
    if (admin) res.status(400).send('admin already exists');

    admin = new Admin({
        Name: req.body.Name,
        phone: req.body.phone,
        Email: req.body.Email,
        Address: req.body.Address,
       
    });

   

    const salt = await bcrypt.genSalt(10);
    admin.password = staff.password = await bcrypt.hash(req.body.password, salt);

    await admin.save();
    

    res.send(admin);
});

router.put('/:id', async (req, res) => {
    const idStatus = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!idStatus) return res.status(400).send("invalid id.");

    let admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send("admin not found.");


    const { error } = validateAdmin.validate(req.body);
    if (error) return res.status(400).send(error.message);

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    admin = await Admin.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name,
        phone: req.body.phone,
        Email: req.body.Email,
        Address: req.body.Address,
        password: password
    }, {
        new: true
    });

    staff = await Staff.findByIdAndUpdate(staff._id, {
        Email: req.body.Email,
        password: password
    })

    res.send(admin);
});

router.delete('/:id', async (req, res) => {
    const id = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!id) return res.status(400).send("invalid id.");

    let admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send("admin not found.");

    

    admin = await Admin.findByIdAndDelete(req.params.id);
    res.send(admin);
});

module.exports = router;