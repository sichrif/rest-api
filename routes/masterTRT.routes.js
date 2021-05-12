const express = require('express');

const manageTRT = require('../controllers/masterTRT.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addmastertrt', manageTRT.addmastertrt);

// Add a coming specialite
router.post('/updatemastertrt/:id', manageTRT.updatemastertrt);

// get one coming specialite
router.get('/getOnemastertrt/:id', manageTRT.getOnemastertrt);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastertrt', manageTRT.getManymastertrt);

// delete coming event
router.delete('/deletemastertrt/:id', manageTRT.deletemastertrt);


module.exports = router;
