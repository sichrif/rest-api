const express = require('express');
const router = express.Router();

const userController = require('./../controllers/user');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/recover',userController.recover);
router.post('/reset',userController.reset);
router.post('/resetPassword',userController.resetPassword);








module.exports = router ;