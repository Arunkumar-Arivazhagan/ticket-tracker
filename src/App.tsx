import { useState, Fragment, useEffect } from "react";

type PokemonResponse = {
  results: Pokemon[];
};
type Pokemon = {
  name: string;
  url: string;
};
const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data: PokemonResponse = await response.json();
    setPokemons(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      {pokemons.map(({ name }, index) => {
        const id = index + 1;
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
          <Fragment key={name}>
            <p>{name}</p>
            <img src={src} alt={name} />
          </Fragment>
        );
      })}
      {/* <button onClick={fetchPokemon}>Show Pokemon</button> */}
    </>
  );
};

export default App;
