var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokébank' });
});

router.get('/auth/google', passport.authenticate(
  'google', { scope: ['profile', 'email'], prompt: 'select_account' }
));

router.get('/oauth2callback', passport.authenticate(
  'google', { successRedirect: '/pokedex', failureRedirect: '/' }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
