export const fetchPokemonsList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const data = await response.json();
  return data;
};
