fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => {
    console.log(response);
    if (response.status === 404) {
      throw new Error("POKEMON NOT FOUND");
    }
    return response.json();
  })
  .then((jsonResponse) => {
    console.log(jsonResponse);
  })
  .catch((error) => console.log(error));
