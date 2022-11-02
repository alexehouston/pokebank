const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  pokeId: {
    type: Number
  },
  name: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);