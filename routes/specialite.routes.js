const express = require('express');

const manageSpecialite = require('../controllers/specialite.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();


// Add a coming specialite
router.post('/addSPECIALITE',authenticateJWT, manageSpecialite.addSPECIALITE);

// Add a coming specialite
router.post('/updateSPECIALITE/:id',authenticateJWT, manageSpecialite.updateSPECIALITE);

// get one coming specialite
router.get('/getOneSPECIALITE/:id',authenticateJWT, manageSpecialite.getOneSPECIALITE);

// get many coming specialite
// /events  => get all specialite
router.get('/getManySPECIALITE',authenticateJWT, manageSpecialite.getManySPECIALITE);

// delete coming event
router.delete('/deleteSPECIALITE/:id',authenticateJWT, manageSpecialite.deleteSPECIALITE);


module.exports = router;
