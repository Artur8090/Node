const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userController = require("../controllers/user-controller.js");

router.post('/reg', userController.addUser);

router.get('/reg', userController.registerPage);

router.get('/authorization',userController.authorizationPage)


router.get('/logout', userController.logout)
router.post('/login', userController.login)
router.get('/chat', userController.chatPage)
module.exports = router;
