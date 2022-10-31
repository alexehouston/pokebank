const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', gamesCtrl.index);
router.get('/:id', gamesCtrl.show);
router.post('/', ensureLoggedIn, gamesCtrl.create);

module.exports = router;