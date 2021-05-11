const express = require('express');
const router = express.Router();
const { verifiedFunction, authRole } = require('../middeleware/auth');
const userController = require('./../controllers/user');



router.post('/register', userController.register);
// router.post('/login', userController.login);
router.post('/login', userController.login);
router.post('/forgotPassword/', userController.forgotPassword);
router.get('/resetPassword/:token', userController.resetPassword);
router.post('/users',(req,res)=>{
    res.send()
})



module.exports = router;
