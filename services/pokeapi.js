const axios = require('axios');

async function getPokemonData(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = { getPokemonData };
