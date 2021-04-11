const express = require('express');
const router = express.Router();

const adminController = require('./../controllers/admin');



// Sign up an Admin
router.post('/admin', adminController.signUp);

// Sign in Admin
router.post('/admin/login', adminController.signIn);

// Sign out admin
router.post('/admin/logout', authAdmin, adminController.signOut);




module.exports = router;
