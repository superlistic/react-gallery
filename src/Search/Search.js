import React from 'react';

const Search = ({ setApiRes, api }) => {
  const submit = async () => {
    const response = await api.search('dudd');
    setApiRes(response);
  };
  return (
    <div>
      <input type="text" placeholder="search for 'cats'" />
      <input type="button" value="BIG RED" onClick={submit} />
    </div>
  );
};

export default Search;
