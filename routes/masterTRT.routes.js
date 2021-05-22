const express = require('express');

const manageTRT = require('../controllers/masterTRT.controller');

const { authenticateJWT} = require('../middeleware/auth');
const router = new express.Router();


// Add a coming specialite
router.post('/addmastertrt',authenticateJWT, manageTRT.addmastertrt);

// Add a coming specialite
router.post('/updatemastertrt/:id',authenticateJWT, manageTRT.updatemastertrt);

// get one coming specialite
router.get('/getOnemastertrt/:id',authenticateJWT, manageTRT.getOnemastertrt);

// get many coming specialite
// /events  => get all specialite
router.get('/getManymastertrt', authenticateJWT,manageTRT.getManymastertrt);

// delete coming event
router.delete('/deletemastertrt/:id',authenticateJWT, manageTRT.deletemastertrt);


module.exports = router;
