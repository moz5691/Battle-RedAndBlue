const mongoose = require('mongoose');
const keys = require('./../config/keys');

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

module.exports = { mongoose };
