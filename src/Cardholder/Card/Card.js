import React, { useState } from 'react';
import './Card.css';
import '../../main.css';
const Card = ({ image }) => {
  const [clicked, setClicked] = useState(false);
  const className = clicked ? 'card card--selected' : 'card';
  return (
    <div
      className={className}
      data-testid={`card_${image.id}`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <div className="card__inner">
        <div className="card__front">
          <img
            className="card__image"
            data-testid={`image_${image.id}`}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
        <div className="card__back">
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
