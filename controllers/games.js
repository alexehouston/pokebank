const Game = require('../models/game');
const Pokemon = require('../models/pokemon');

module.exports = {
    index,
    show,
    create,
    delete: deleteGame
}

function index(req, res) {
    Game.find({}, function(err, games) {
      res.render('games/index', { title: 'All Games', games });
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
      Pokemon.find({game: game._id}, function(err, pokemon) {
      res.render('games/show', { title: 'Game Details', game, pokemon });
      });
    });
}

function deleteGame(req, res, next) {
    Game.deleteOne({_id: req.params.id}, function(err, game) {
      if (err) return res.redirect('/games');
        res.redirect('/games');
      });
}

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    const game = new Game(req.body);
    game.save(function(err) {
      if (err) return res.redirect('/games');
      res.redirect('/games');
    });
  }