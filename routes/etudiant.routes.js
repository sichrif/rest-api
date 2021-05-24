const express = require('express');

const manageetudiant = require('../controllers/etudiant.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();



router.post('/addstudent',authenticateJWT,manageetudiant.addstudent);


router.post('/getOnestudent/:id', authenticateJWT,manageetudiant.getOnestudent);


router.get('/getManystudent',authenticateJWT, manageetudiant.getManystudent);


router.delete('/deletestudent/:id', authenticateJWT,manageetudiant. deletestudent);


router.post('/updatestudent/:id', authenticateJWT,manageetudiant.updatestudent);

module.exports = router;


