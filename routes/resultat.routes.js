const express = require('express');

const manageresult = require('../controllers/resultat.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resultat');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post('/addresult', authenticateJWT, upload.single('file'), manageresult.addresult);


router.post('/getOneresult/:id', authenticateJWT,manageresult.getOneresult);


router.get('/getManyresult',authenticateJWT, manageresult.getManyresult);


router.delete('/deleteresult/:id', authenticateJWT,manageresult.deleteresult);


router.post('/updateresult/:id', authenticateJWT, upload.single('file'),manageresult.updateresult);

module.exports = router;


