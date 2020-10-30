import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Search } from './Search';
import { Cardholder } from './Cardholder';
import { Pagination } from './Pagination';
import { Greeting } from './Greeting';
import { About } from './About';
import { Footer } from './Footer';
import Unsplash from './Unsplash';
import './main.css';

const api = new Unsplash('APIKEY');

function App() {
  const [apiResponse, setApiResponse] = useState({ results: [] });
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // console.log(searchTerm, page);
    if (searchTerm !== '') {
      const fetchData = async () => {
        // console.log('SEARCHTERM TRIGGERED');
        const res = await api.search(searchTerm, page);
        setApiResponse(res);
      };
      fetchData();
    }
  }, [searchTerm, page]);

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        // console.log('PAGE TRIGGERED');
        const res = await api.search(searchTerm, page);
        setApiResponse(res);
      };
      fetchData();
    }
  }, [page, searchTerm]);

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/search">
              <Search
                setSearchTerm={param => {
                  setSearchTerm(param);
                }}
              />
              <Cardholder apiResponse={apiResponse} />
              <Pagination
                page={page}
                setPage={currentPage => setPage(currentPage)}
                total={apiResponse.total_pages}
              />
            </Route>
            <Route exact path="/">
              <Greeting
                cta={
                  <Search
                    setSearchTerm={param => {
                      setSearchTerm(param);
                    }}
                  />
                }
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
