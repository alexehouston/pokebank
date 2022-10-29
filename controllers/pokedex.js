const Account = require('../models/pokedex');

module.exports = {
    index
  };

  function index(req, res) {
    console.log('err');
    Account.find({}, function(err, pokedex) {
      res.render('pokedex/index', { title: 'Pokédex', pokedex });
    });
  }