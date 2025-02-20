var express = require('express');
var router = express.Router();
const homeController = require('../controllers/home-controller.js')
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', homeController.index);
router.get('/about', homeController.about);
module.exports = router;
const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },  
    password:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
        
    },
})
userSchema.methods.done = function(){
    const greeting = `User ${this.login} had been succesfully registered`
    console.log(greeting)
}
const User = mongoose.model('User', userSchema);

module.exports = User;