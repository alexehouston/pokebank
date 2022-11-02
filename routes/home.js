const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Pokébank' });
  });

module.exports= router;