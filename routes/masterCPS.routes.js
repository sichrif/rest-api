const express = require('express');

const manageCPS = require('../controllers/masterCPS.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();


// Add a coming specialite
router.post('/addmastercps',authenticateJWT, manageCPS.addmastercps);

// Add a coming specialite
router.post('/updatemastercps/:id',authenticateJWT, manageCPS.updatemastercps);

// get one coming specialite
router.get('/getOnemastercps/:id', authenticateJWT,manageCPS.getOnemastercps);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastercps', authenticateJWT,manageCPS.getManymastercps);

// delete coming event
router.delete('/deletemastercps/:id', authenticateJWT,manageCPS.deletemastercps);


module.exports = router;
