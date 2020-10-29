import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
