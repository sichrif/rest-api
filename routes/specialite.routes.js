const express = require('express');

const manageSpecialite = require('../controllers/specialite.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addSPECIALITE', manageSpecialite.addSPECIALITE);

// Add a coming specialite
router.post('/updateSPECIALITE/:id', manageSpecialite.updateSPECIALITE);

// get one coming specialite
router.get('/getOneSPECIALITE/:id', manageSpecialite.getOneSPECIALITE);

// get many coming specialite
// /events  => get all specialite
router.get('/getManySPECIALITE', manageSpecialite.getManySPECIALITE);

// delete coming event
router.delete('/deleteSPECIALITE/:id', manageSpecialite.deleteSPECIALITE);


module.exports = router;
