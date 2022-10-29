var express = require('express');
var router = express.Router();
var pokedexCtrl = require('../controllers/pokedex');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, pokedexCtrl.index);

module.exports = router;