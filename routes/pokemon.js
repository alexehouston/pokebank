var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../controllers/pokemon');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/:id/games', pokemonCtrl.getPokemon);
// router.post('/games/:id', ensureLoggedIn, pokemonCtrl.create);
// router.post('/games/:id/pokemon', ensureLoggedIn, pokemonCtrl.addToTeam);

module.exports = router;