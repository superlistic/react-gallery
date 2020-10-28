import React, { useState } from 'react';
import './Card.css';
import '../../main.css';
const Card = ({ image }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="card"
      data-testid={`card_${image.id}`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      {clicked ? (
        <p>{image.description}</p>
      ) : (
        <img
          data-testid={`image_${image.id}`}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </div>
  );
};

export default Card;
