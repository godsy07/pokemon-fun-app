import React, { useState, useEffect } from "react";

const PokemonList = ({ poke }) => {
  // const [qualities, setQualities] = useState([]);

  // useEffect(() => {
  //   fetch(poke.url).then(res => res.json())
  //   .then(data => data)
  // }, [])

  // src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}

  return (
    <div className='card-info'>
      {/* <img src='' /> */}
      <p>{poke.name.toUpperCase()}</p>
    </div>
  );
};

export default PokemonList;
