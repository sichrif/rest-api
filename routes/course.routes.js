const express = require('express');

const manageCourse = require('../controllers/course.controller');


const router = new express.Router();


// Add a coming specialite
router.post('/addcours', manageCourse.addcours);

// Add a coming specialite
router.post('/getOnecours', manageCourse.getOnecours);

// get one coming specialite
router.get('/getManycours', manageCourse.getManycours);

// get many coming specialite
// /events  => get all specialite
router.get('/ deletecours', manageCourse. deletecours);

// delete coming event
router.post('/updatecours/:id', manageCourse.updatecours);

module.exports = router;


