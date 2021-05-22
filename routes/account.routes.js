const express = require('express');

const manageaccount = require('../controllers/account.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();



router.post('/addaccount',authenticateJWT,manageaccount.addaccount);


router.post('/getOneaccount/:id', authenticateJWT,manageaccount.getOneaccount);


router.get('/getManyaccount',authenticateJWT, manageaccount.getManyaccount);


router.delete('/deleteaccount/:id', authenticateJWT,manageaccount.deleteaccount);


router.post('/updateaccount/:id', authenticateJWT,manageaccount.updateaccount);

module.exports = router;


