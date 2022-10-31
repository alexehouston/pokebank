const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');

router.post('/games/:id/teams', teamsCtrl.create);

module.exports = router;