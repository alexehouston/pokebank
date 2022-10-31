const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    enum: ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']
  },
  nickname: {
    type: String
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: 'Game'
  }
});

module.exports = mongoose.model('Pokémon', pokemonSchema);