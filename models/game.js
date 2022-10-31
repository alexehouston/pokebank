const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({

});

const gameSchema = new Schema({
  name: {
    type: String,
    enum: ['Red', 'Blue', 'Yellow', 'Gold', 'Silver', 'Crystal', 'Ruby', 'Sapphire', 'Fire Red', 'Leaf Green', 'Emerald', 'Diamond', 'Pearl', 'Platinum', 'Heart Gold', 'Soul Silver', 'Black', 'White', 'Black 2', 'White 2', 'X', 'Y', 'Omega Ruby', 'Alpha Sapphire', 'Sun', 'Moon', 'Ultra Sun', 'Ultra Moon', 'Sword', 'Shield', 'Brilliant Diamond', 'Shining Pearl', 'Scarlet', 'Violet']
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