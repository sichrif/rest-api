const express = require('express');

const manageCSI = require('../controllers/masterCSI.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();


// Add a coming specialite
router.post('/addmastercsi',authenticateJWT, manageCSI.addmastercsi);

// Add a coming specialite
router.post('/updatemastercsi/:id',authenticateJWT,manageCSI.updatemastercsi);

// get one coming specialite
router.get('/getOnemastercsi/:id',authenticateJWT, manageCSI.getOnemastercsi);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastercsi',authenticateJWT, manageCSI.getManymastercsi);

// delete coming event
router.delete('/deletemastercsi/:id',authenticateJWT, manageCSI.deletemastercsi);


module.exports = router;
