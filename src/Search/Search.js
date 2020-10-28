import React, { useState } from 'react';
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

const Search = ({ setApiRes, api }) => {
  const [hist, setHist] = useState(getHist());
  const submit = async ev => {
    ev.preventDefault();
    const response = await api.search(ev.target[0].value);
    updateHist(ev.target[0].value, setHist);
    ev.target[0].value = '';
    setApiRes(response);
  };
  return (
    <div className="search">
      <form className="search__form" onSubmit={submit}>
        <input
          className="search__text-input"
          type="text"
          list="search-history"
          placeholder="search for 'cats'"
        />
        <datalist id="search-history">
          {hist.map(option => (
            <option key={option} value={option} />
          ))}
        </datalist>

        <button type="submit" className="search__button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
