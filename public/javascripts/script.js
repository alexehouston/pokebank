// const pokedex = document.getElementById('pokedex');
// const cachedPokemon = {};

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
