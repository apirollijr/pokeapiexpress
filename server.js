const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const pokemonRoutes = require('./routes/pokemon');

app.use(cors());
app.use(express.json());
app.use('/pokemon', pokemonRoutes);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Pokémon API server running on http://localhost:${PORT}`);
});
