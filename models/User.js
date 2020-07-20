const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  date: {
    type: Date,
    defautlt: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
