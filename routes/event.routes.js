const express = require('express');

const manageEventsController = require('../controllers/event.controller');


const router = new express.Router();

// Add a coming event
router.post('/events', manageEventsController.addEvent);

// Add a coming event
router.post('/events/update/:id', manageEventsController.updateEvent);

// get one coming event
router.get('/events/:id', manageEventsController.getOneEvent);

// get many coming events
// /events  => get all events
router.get('/events', manageEventsController.getManyEvents);

// delete coming event
router.delete('/events/:id', manageEventsController.deleteEvent);


module.exports = router;
