const express = require('express');

const manageresult = require('../controllers/resultat.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();



router.post('/addresult',authenticateJWT,manageresult.addresult);


router.post('/getOneresult/:id', authenticateJWT,manageresult.getOneresult);


router.get('/getManyresult',authenticateJWT, manageresult.getManyresult);


router.delete('/deleteresult/:id', authenticateJWT,manageresult.deleteresult);


router.post('/updateresult/:id', authenticateJWT,manageresult.updateresult);

module.exports = router;


