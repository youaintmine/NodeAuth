const express = require('express');
const router = express.Router();

//router.get('/', require('./routes/users'));
router.get('/', (req, res) => {
  res.render('welcome');
});

module.exports = router;
