const express = require('express');

const manageCPS = require('../controllers/masterCPS.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addmastercps', manageCPS.addmastercps);

// Add a coming specialite
router.post('/updatemastercps/:id', manageCPS.updatemastercps);

// get one coming specialite
router.get('/getOnemastercps/:id', manageCPS.getOnemastercps);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastercps', manageCPS.getManymastercps);

// delete coming event
router.delete('/deletemastercps/:id', manageCPS.deletemastercps);


module.exports = router;
