const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');

router.get('/:id/games', teamsCtrl.create);

module.exports = router;