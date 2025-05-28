async function searchPokemon() {
  const name = document.getElementById('pokemon-name').value.trim().toLowerCase();
  if (!name) return;

  const res = await fetch(`/pokemon/${name}`);
  if (!res.ok) {
    document.getElementById('result').innerHTML = '<p>Pokémon not found.</p>';
    return;
  }

  const data = await res.json();
  document.getElementById('poke-name').textContent = `#${data.id} - ${data.name}`;
  document.getElementById('poke-image').src = data.sprites;
  document.getElementById('poke-types').textContent = `Type(s): ${data.types.join(', ')}`;
  document.getElementById('poke-stats').textContent = `Height: ${data.height}, Weight: ${data.weight}`;
}
