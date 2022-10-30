var express = require('express');
var router = express.Router();
var pokedexCtrl = require('../controllers/pokedex');
var ensureLoggedIn = require('../config/ensureLoggedIn');

var ROOT_URL = 'https://pokeapi.co/api/v2';

router.get('/', ensureLoggedIn, pokedexCtrl.index);

router.get('/', async function(req, res, next) {
    const generation = req.query.generation;
    const genData = await fetch(`${ROOT_URL}/generation/${generation}`, options)
      .then(res => res.json());
    res.render('index', { genData });
});

module.exports = router;