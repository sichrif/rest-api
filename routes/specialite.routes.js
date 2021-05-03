const express = require('express');

const manageSpecialite = require('../controllers/specialite.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addSPECIALITE', manageSpecialite.addSPECIALITE);

// Add a coming specialite
router.post('/specialite/update/:id', manageSpecialite.updateSPECIALITE);

// get one coming specialite
router.get('/specialite/:id', manageSpecialite.getOneSPECIALITE);

// get many coming specialite
// /events  => get all specialite
router.get('/specialite', manageSpecialite.getManySPECIALITE);

// delete coming event
router.delete('/specialite/:id', manageSpecialite.deleteSPECIALITE);


module.exports = router;
