import React from 'react';
import '../main.css';
import './Greeting.css';

const Greeting = ({ cta }) => {
  return (
    <div className="greeting">
      <h1 className="greeting__heading">re:splash</h1>
      <h2 className="greeting__subheading">
        "By the power of unsplash you can.."
      </h2>
      {cta}
    </div>
  );
};

export default Greeting;
