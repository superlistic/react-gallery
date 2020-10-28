import React, { useState } from 'react';

const updateHist = str => {
  const currHist = localStorage.getItem('search_hist');
  const histIndex = currHist.findIndex(str);
  if (histIndex < 0) {
    const newHist = currHist.push(str);
    localStorage.setItem('search_hist', newHist);
  } else {
    let newHist = currHist.splice(histIndex, 1);
    console.log(currHist);
  }
};

const Search = ({ setApiRes, api }) => {
  const [hist, setHist] = useState([]);
  const submit = async ev => {
    ev.preventDefault();
    const response = await api.search(ev.target[0].value);
    updateHist(ev.target[0].value);
    console.log('submit pressed: ', response);
    setApiRes(response);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="search for 'cats'" />
        <button type="submit">cat me!</button>
      </form>
    </div>
  );
};

export default Search;
