const express = require('express');

const manageCourse = require('../controllers/course.controller');
const { authenticateJWT} = require('../middeleware/auth');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/cours');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });


const router = new express.Router();


// Add a coming specialite
router.post('/addcours', authenticateJWT,upload.single('cour'),manageCourse.addcours);

// Add a coming specialite
router.post('/getOnecours/:id', authenticateJWT,manageCourse.getOnecours);

// get one coming specialite
router.get('/getManycours',authenticateJWT, manageCourse.getManycours);

// get many coming specialite
// /events  => get all specialite
router.delete('/deletecours/:id', authenticateJWT,manageCourse. deletecours);

// delete coming event
router.post('/updatecours/:id', authenticateJWT,upload.single('cour'), manageCourse.updatecours);

module.exports = router;


