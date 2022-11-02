const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, homeCtrl.index);

module.exports = router;