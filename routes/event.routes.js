const express = require('express');
const { authenticateJWT} = require('../middeleware/auth');
const manageEventsController = require('../controllers/event.controller');


const router = new express.Router();

// Add a coming event
router.post('/addEvent',authenticateJWT, manageEventsController.addEvent);

// Add a coming event


router.post('/updateEvent/:id',authenticateJWT, manageEventsController.updateEvent);



// get one coming event
router.get('/getOneEvent/:id', authenticateJWT,manageEventsController.getOneEvent);

// get many coming events
// /events  => get all events
router.get('/getManyEvents',authenticateJWT, manageEventsController.getManyEvents);

// delete coming event
router.delete('/deleteEvent/:id', authenticateJWT,manageEventsController.deleteEvent);


module.exports = router;
