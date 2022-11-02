const Pokemon = require('../models/pokemon');
const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/';

module.exports = {
    index,
    getPokemon
  };

  function index(req, res) {
    Pokemon.find({}, function(err, pokemon) {
      res.render('pokemon/index', { title: 'Pokédex', pokemon });
    });
  }

  async function getPokemon(req, res, next) {
    const pokemon = req.query.pokemon.toLowerCase();
    try {
      const data = await fetch(`${ROOT_URL}${pokemon}/`)
      const pokeData = await data.json();
      console.log(pokeData);
      res.render('pokemon/index', { pokeData, gameId:req.params.id });
    } catch(err) {
      res.redirect(`/games/${req.params.id}`);
    }
  };
  

  