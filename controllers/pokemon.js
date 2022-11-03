const Pokemon = require('../models/pokemon');
const Game = require('../models/game');

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon/';

module.exports = {
    index,
    show,
    getPokemon,
    getPokedex,
    create
  };

function index(req, res) {
  Pokemon.find({}, function(err, pokemon) {
    res.render('pokemon/index', { title: 'Pokédex', pokemon });
  });
}

function show(req, res) {
  Pokemon.findOne({_id:req.params.id}, function(err, pokeData) {
    res.render('pokemon/show', { title: 'Pokémon Details', pokeData });
  });
}

async function getPokemon(req, res, next) {
  const pokemon = req.query.pokemon.toLowerCase();
  try {
    const data = await fetch(`${ROOT_URL}${pokemon}/`);
    const pokeData = await data.json();
    res.render('pokemon/index', { pokeData, gameId:req.params.id });
  } catch(err) {
    res.redirect(`/games/${req.params.id}`);
  }
}

async function getPokedex(req, res) {
  let pokedex = Pokemon.find(req.params.id).populate('image').exec();
    res.render('pokemon/pokedex', { title: 'Pokédex', pokedex });
}

// const pokedex = document.getElementById('pokedex');

// const fetchPokemon = async () => {
//     const url = `https://pokeapi.co/api/v2/pokemon?limit=905`;
//     const res = await fetch(url);
//     const data = await res.json();
//     const pokemon = data.results.map((data, index) => ({
//         name: data.name,
//         id: index + 1,
//         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`
//     }));
//     displayPokemon(pokemon);
// };

// const displayPokemon = (pokemon) => {
//     const pokemonHTMLString = pokemon.map((pokemon) => 
//     `<li class="card"><a href="/pokemon/${pokemon.id}"><img class="card-image" src="${pokemon.image}"/></a></li>`).join('');
//     pokedex.innerHTML = pokemonHTMLString;
// };

// fetchPokemon();

async function create(req, res) {
  const poke = await Pokemon.exists({pokeId:req.body.pokeId})
  if (poke) {
    Game.findById(req.params.id, function(err, game) {
      let pokeInArr = game.caught.some(id => id.equals(poke._id));
      if (pokeInArr) return res.redirect(`/games/${game._id}`);
      game.caught.push(poke._id);
      game.save(function(err) {
        if (err) res.redirect(`/games/${game._id}`);
          res.redirect(`/games/${game._id}`);
        });
      });
    } else {
      const pokemon = new Pokemon(req.body);
      pokemon.save(function(err) {
        Game.findById(req.params.id, function(err, game) {
          game.caught.push(pokemon._id);
          game.save(function(err) {
            if (err) res.redirect(`/games/${game._id}`);
            res.redirect(`/games/${game._id}`);
          });
        });
      });
    }
  }

  

  