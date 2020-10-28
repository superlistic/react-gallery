import React, { useState } from 'react';
import { Nav } from './Nav';
import { Search } from './Search';
import { Cardholder } from './Cardholder';
import { Pagination } from './Pagination';
import './App.css';

function App({ api }) {
  const [apiResponse, setApiResponse] = useState({ results: [] });
  return (
    <div className="App">
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
  );
}

export default App;
