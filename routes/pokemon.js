var express = require('express');
var router = express.Router();
var pokemonCtrl = require('../controllers/pokemon');
var ensureLoggedIn = require('../config/ensureLoggedIn');


module.exports = router;