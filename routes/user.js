const express = require('express');
const router = express.Router();
const { verifiedFunction, authRole, authadmin } = require('../middeleware/auth');
const userController = require('./../controllers/user');
const { authenticateJWT} = require('../middeleware/auth');


router.post('/register', userController.register);
// router.post('/login', userController.login);

router.post('/login', userController.login);
router.post('/forgotPassword/', userController.forgotPassword);
router.get('/resetPassword/:token', userController.resetPassword);

router.post('/updateuser/:id',authenticateJWT,userController.updateuser);
router.get('/getOneuser/:id', authenticateJWT,userController.getOneuser);
router.get('/getManyuser', authenticateJWT,userController.getManyuser);
router.delete('/deleteuser/:id', authenticateJWT,userController.deleteuser);
router.get('/getalluser/',authenticateJWT,userController.getalluser);
router.get('/getallensegn/',authenticateJWT,userController.getallensegn);



router.post('/users',(req,res)=>{
    res.send()
})



module.exports = router;
