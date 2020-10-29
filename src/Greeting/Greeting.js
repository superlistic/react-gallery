import React from 'react';
import '../main.css';
import './Greeting.css';

const Greeting = () => {
  return (
    <div className="greeting">
      <h5 className="greeting__text">Welcome to our React Gallery!</h5>
      {/* <br /> */}
      <p className="greeting__text">Search below for awesome pictures</p>
    </div>
  );
};

export default Greeting;
