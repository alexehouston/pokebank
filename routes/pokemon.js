var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../controllers/pokemon');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/games/:id/pokemon', pokemonCtrl.getPokemon);
router.get('/pokemon/:id', pokemonCtrl.show);
router.get('/pokemon', pokemonCtrl.getPokedex);
router.post('/games/:id/pokemon', ensureLoggedIn, pokemonCtrl.create);

module.exports = router;