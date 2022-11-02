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
  type: {
    type: String
  },
  image: {
    type: String
  },
  nickname: {
    type: String
  }
});

module.exports = mongoose.model('Pokémon', pokemonSchema);