const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pokemon: {
        type: Schema.Types.ObjectId,
        ref: 'Pokemon'
    }
});

const gameSchema = new Schema({
  title: {
    type: String,
    enum: ['Red', 'Blue', 'Yellow', 'Gold', 'Silver', 'Crystal', 'Ruby', 'Sapphire', 'Emerald', 'Diamond', 'Pearl', 'Platinum', 'Black', 'White', 'X', 'Y', 'Sun', 'Moon', 'Sword', 'Shield', 'Scarlet', 'Violet'],
    required: true
},
  caught: [{
    type: Schema.Types.ObjectId,
    ref: 'Pokemon'
  }],
  teams: [teamSchema]

}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);