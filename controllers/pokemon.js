const Pokedex = require('../models/pokemon');

module.exports = {
    index,
  };

  function index(req, res) {
    console.log('err');
    Pokedex.find({}, function(err, pokedex) {
      res.render('pokedex/index', { title: 'Pokédex', pokedex });
    });
  }