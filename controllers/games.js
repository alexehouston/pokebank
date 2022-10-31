const Game = require('../models/game');
const Pokemon = require('../models/pokemon');

module.exports = {
    index,
    show,
    new: newGame,
    create
}

function index() {

}

function show() {
}

function newGame() {
    res.render('games/new', {title: 'Add Game'});
}

function create() {
    
}