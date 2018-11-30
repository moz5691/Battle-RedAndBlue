const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  displayName: String
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
