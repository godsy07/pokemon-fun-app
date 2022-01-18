import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ modal, data }) => {
  return (
    <div className='modal-area'>
      <div className='modal'>
        <IoCloseOutline
          className='modal-close'
          onClick={modal}
          style={{ borderRadius: "50%", height: "40px", width: "40px", backgroundColor: "#c9d4cc", color: "red" }}
        />
        <div className='modal-desc'>
          <div>
            <h3>Abilities</h3>
            {data.abilities.map((el, idx) => (
              <p key={idx}>
                {idx + 1}. {el.ability.name}
              </p>
            ))}
          </div>
          <div>
            <img className='modal-image' src={data.image} alt={data.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
