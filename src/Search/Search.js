import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import '../main.css';

const getHist = () => {
  const localStorageString = localStorage.getItem('search_history') ?? '[]';
  return JSON.parse(localStorageString);
};
const updateHist = (newTerm, cb) => {
  const history = getHist();
  const histIndex = history.findIndex(
    s => s.toLowerCase() === newTerm.toLowerCase()
  );
  if (histIndex < 0) {
    history.push(newTerm);
  } else {
    history.splice(histIndex, 1);
    history.push(newTerm);
  }
  if (history.length > 10) {
    history.splice(0, history.length - 10);
  }
  localStorage.setItem('search_history', JSON.stringify(history));
  cb(history);
};

const Search = ({ setSearchTerm }) => {
  const [hist, setHist] = useState(getHist());
  const [input, setInput] = useState('');
  const submit = e => {
    // e.preventDefault();
    updateHist(input, setHist);
    setSearchTerm(input);
  };

  useEffect(() => {
    return () => {
      setInput('');
    };
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <form className="search__form">
        <input
          onChange={e => handleChange(e)}
          className="search__text-input"
          type="text"
          list="search-history"
          // placeholder="Search for awesomeness"
          placeholder="Find stuff"
          value={input}
        />
        <datalist id="search-history">
          {hist.map(option => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <Link
          data-testid="search__button"
          to="/search"
          className="search__button"
          onClick={submit}
          // onKeyPress={(e) => {
          //   e.charCode === 13 ? submit(e) : noOp();
          // }}
        >
          <SearchIcon className="search__icon" fontSize="large" />
        </Link>
      </form>
    </div>
  );
};

export default Search;
