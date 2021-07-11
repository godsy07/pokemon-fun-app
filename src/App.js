import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  const [loading, setLoading] = useState(false);

  const [pokemonApiUrl, setApiUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  useEffect(() => {
    setLoading(true);
    fetch(pokemonApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setPreviousUrl(data.previous);
        setNextUrl(data.next);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [pokemonApiUrl]);

  const visitNextPage = () => {
    setApiUrl(nextUrl);
  };

  const visitPrevPage = () => {
    setApiUrl(previousUrl);
  };

  if (loading) return "Loading";

  return (
    <div className='container'>
      <h1>Pokemon App</h1>
      <div className='card-list'>
        {pokemons.map((e, index) => (
          <PokemonList key={index} poke={e} />
        ))}
      </div>
      <Pagination
        visitPrevPage={previousUrl ? visitPrevPage : null}
        visitNextPage={nextUrl ? visitNextPage : null}
      />
    </div>
  );
};

export default App;
