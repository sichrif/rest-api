const express = require('express');
const { authenticateJWT} = require('../middeleware/auth');
const manageEventsController = require('../controllers/event.controller');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/events');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = new express.Router();

// Add a coming event
router.post('/addEvent', authenticateJWT,upload.single('file'), manageEventsController.addEvent);

// Add a coming event


router.post('/updateEvent/:id', authenticateJWT,upload.single('file'), manageEventsController.updateEvent);



// get one coming event
router.get('/getOneEvent/:id', authenticateJWT,manageEventsController.getOneEvent);

// get many coming events
// /events  => get all events
router.get('/getManyEvents',authenticateJWT, manageEventsController.getManyEvents);

// delete coming event
router.delete('/deleteEvent/:id', authenticateJWT,manageEventsController.deleteEvent);


module.exports = router;
