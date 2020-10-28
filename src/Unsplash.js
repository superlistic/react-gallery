import { data } from './mockData';
function Unsplash(key) {
  this.key = key;
  this.baseUrl = 'https://api.unsplash.com/';

  this.search = term => {
    return data;
  };
}

export default Unsplash;
