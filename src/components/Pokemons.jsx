import { useState, useEffect } from "react";

function Pokemons() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  async function getPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/dsadsadsa"
      );
      console.log(response.ok);

      if (!response.ok) {
        setLoading(false);
        setError("There was an error, try again later");
        throw new Error("There was an error");
      }

      const jsonResponse = await response.json();
      console.log(
        "esta linea no se ejecutará hasta que la promise se resuelva"
      );

      // lo que yo quiero es jsonresponse.results (el array)

      setPokemonsArray(jsonResponse.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // lo que queramos ejecutar solamente cuando el componente se MONTA
    getPokemons();
  }, []); // el array vacío es necesario

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ul>
        <button onClick={getPokemons}>Get pokemons</button>
        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {pokemonsArray.map((pokemon, index) => {
          return <li key={pokemon + index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemons;
