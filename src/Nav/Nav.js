import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">LOGO</div>
      <div className="nav__links">
        <Link className="nav__item" to="/">
          Home
        </Link>
        <Link className="nav__item" to="/about">
          About
        </Link>
        <Link className="nav__item" to="/search">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Nav;
