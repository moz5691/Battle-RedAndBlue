const mongoose = require('mongoose');
const { Schema } = mongoose;
const GameSchema = new Schema({
  // Add Game schema here..
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Game = mongoose.model('games', GameSchema);
module.exports = Game;
