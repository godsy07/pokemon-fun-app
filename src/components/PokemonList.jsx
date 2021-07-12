import React, { useState, useEffect } from "react";

const PokemonList = ({ poke }) => {
  // Setting up variables for each Element
  const [abilities, setAbilities] = useState([]);
  const [sprites, setSprites] = useState([]);
  const [image, setImage] = useState();
  // const [moves, setMoves] = useState([]);

  useEffect(() => {
    fetch(poke.url)
      .then((res) => res.json())
      .then((data) => {
        setAbilities(data.abilities);
        setSprites(data.sprites);
        setImage(data.sprites.other.dream_world.front_default);
        // setMoves(data.moves);
      });
  }, []);

  return (
    <div className='card-info'>
      <div className='card-images'>
        {/* {<img src={sprites.other.dream_world.front_default} />} */}
        {/* <img src={sprites.front_default} /> */}
        <img src={image} />
      </div>

      <p className='name'>{poke.name.toUpperCase()}</p>
      <div className='abilities'>
        <h4>Abilities: </h4>
        <div>
          {abilities.map((e, idx) => (
            <p key={idx}>
              {idx + 1}. {e.ability.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
