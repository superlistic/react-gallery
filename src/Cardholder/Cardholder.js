import React from 'react';
import { Card } from './Card';
import '../main.css';
import './Cardholder.css';
const Cardholder = ({ apiResponse }) => {
  return (
    <div className="cardholder">
      {apiResponse.results.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Cardholder;
