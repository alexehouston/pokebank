var express = require('express');
var router = express.Router();
var accountsCtrl = require('../controllers/accounts');
var ensureLoggedIn = require('../config/auth');

router.get('/account', ensureLoggedIn, accountsCtrl.index);

module.exports = router;