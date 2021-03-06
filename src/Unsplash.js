// import { data } from './mockData';
function Unsplash(key) {
  this.key = key;
  this.baseUrl = 'https://api.unsplash.com/';

  this.search = async (term, pageNum) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${term}&page=${pageNum}&per_page=30`,
      {
        headers: {
          Authorization:
            'Client-ID CVQNCvZfIk9YWo4TkAK6KopdZyHo1DoXrjvDhl7X4yA',
        },
      }
    );
    return await response.json();
  };
}

export default Unsplash;
