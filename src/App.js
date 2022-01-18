import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  // Setting variables for passing search items
  const [list, setList] = useState(null);
  const [searchName, setSearchName] = useState("");

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

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchName}`
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    // await setList(data);
    return data;
  };
  const searchPokemon = (e) => {
    e.preventDefault();
    if (searchName === "") {
      return;
    }
    fetchPokemon()
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.log(error.message));

    setSearchName("");
  };

  if (loading) return "Loading";
  console.log(list);

  return (
    <div className='container'>
      <div className='header'>
        <h1>Pokemon App</h1>
        <form className='search-bar' onSubmit={searchPokemon}>
          <input
            type='text'
            placeholder='Enter Pokemon Name'
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
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
