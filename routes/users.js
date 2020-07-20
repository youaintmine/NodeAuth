const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

const authController = require('../controllers/authController.js');
//User model


//router.get('/', require('./routes/users'));
router.get('/login', (req, res) => {
  res.render('login');
});
//router.get('/', require('./routes/users'));
router.get('/register', (req, res) => {
  res.render('register');
}).post('/register',authController.Register);

module.exports = router;
