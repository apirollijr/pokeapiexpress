const express = require('express');
const router = express.Router();
const { getPokemonData } = require('../services/pokeapi');

router.get('/:name', async (req, res) => {
  try {
    const data = await getPokemonData(req.params.name.toLowerCase());
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: 'Pokémon not found' });
  }
});

module.exports = router;
