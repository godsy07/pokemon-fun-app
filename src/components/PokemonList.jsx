import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const PokemonList = ({ poke }) => {
  // Setting up variables for each Element
  const [abilities, setAbilities] = useState([]);
  const [sprites, setSprites] = useState([]);
  const [image, setImage] = useState();
  const [moves, setMoves] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const viewModal = () => {
    setShowModal(!showModal);

    setModalData({
      name: poke.name,
      image: image,
      abilities: abilities,
      moves: moves,
    });
  };

  useEffect(() => {
    fetch(poke.url)
      .then((res) => res.json())
      .then((data) => {
        setAbilities(data.abilities);
        setSprites(data.sprites);
        setImage(data.sprites.other.dream_world.front_default);
        setMoves(data.moves);
      });
  }, [poke.url]);

  // console.log(sprites);

  return (
    <div className='card-info'>
      {showModal && <Modal modal={viewModal} data={modalData} />}
      <div className='card-images' onClick={viewModal}>
        <img src={sprites.front_default} alt='pokemon' />
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
