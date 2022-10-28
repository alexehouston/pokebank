var express = require('express');
var router = express.Router();
var accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/account', ensureLoggedIn, accountsCtrl.index);

module.exports = router;