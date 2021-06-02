const express = require('express');

const manageCalendrier = require('../controllers/calendrier.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();


router.post('/addcalendrier',authenticateJWT,manageCalendrier.addcalendrier);


router.post('/getOnecalendrier/:id', authenticateJWT,manageCalendrier.getOnecalendrier);


router.get('/getManycalendrier',authenticateJWT, manageCalendrier.getManycalendrier);


router.delete('/deletecours/:id', authenticateJWT,manageCalendrier. deletecalendrier);

router.post('/updatecours/:id', authenticateJWT,manageCalendrier.updatecalendrier);

module.exports = router;


