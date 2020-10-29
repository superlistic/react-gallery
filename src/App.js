import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Search } from './Search';
import { Cardholder } from './Cardholder';
import { Pagination } from './Pagination';
import Unsplash from './Unsplash';
import './main.css';

const api = new Unsplash('apikey');
function App() {
  const [apiResponse, setApiResponse] = useState({ results: [] });
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Search
          setApiRes={param => {
            setApiResponse(param);
          }}
          api={api}
        />
        <Cardholder apiResponse={apiResponse} />
        <Pagination />
      </div>
    </BrowserRouter>
  );
}

export default App;
