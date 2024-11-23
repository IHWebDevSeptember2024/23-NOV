async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

    if (response.status === 404) {
      throw new Error("Pokemon not found");
    }
    
    const jsonResponse = await response.json();
    console.log("esta linea no se ejecutará hasta que la promise se resuelva");
    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

getPokemons();
