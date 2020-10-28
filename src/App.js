import React from 'react';
import { Nav } from './Nav';
import { Search } from './Search';
import { Cardholder } from './Cardholder';
import { Pagination } from './Pagination';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Cardholder />
      <Pagination />
    </div>
  );
}

export default App;
