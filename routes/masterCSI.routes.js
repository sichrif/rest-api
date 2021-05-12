const express = require('express');

const manageCSI = require('../controllers/masterCSI.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addmastercsi', manageCSI.addmastercsi);

// Add a coming specialite
router.post('/updatemastercsi/:id', manageCSI.updatemastercsi);

// get one coming specialite
router.get('/getOnemastercsi/:id', manageCSI.getOnemastercsi);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastercsi', manageCSI.getManymastercsi);

// delete coming event
router.delete('/deletemastercsi/:id', manageCSI.deletemastercsi);


module.exports = router;
