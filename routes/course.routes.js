const express = require('express');

const manageCourse = require('../controllers/course.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();


// Add a coming specialite
router.post('/addcours',authenticateJWT,manageCourse.addcours);

// Add a coming specialite
router.post('/getOnecours/:id', authenticateJWT,manageCourse.getOnecours);

// get one coming specialite
router.get('/getManycours',authenticateJWT, manageCourse.getManycours);

// get many coming specialite
// /events  => get all specialite
router.delete('/deletecours/:id', authenticateJWT,manageCourse. deletecours);

// delete coming event
router.post('/updatecours/:id', authenticateJWT,manageCourse.updatecours);

module.exports = router;


