const express = require('express');
const router = express.Router();

const userController = require('./../controllers/user');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/forgotPassword',userController.forgotPassword);
router.post('/resetPassword/:token',userController.resetPassword);









module.exports = router ;