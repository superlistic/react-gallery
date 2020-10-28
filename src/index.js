import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Unsplash from './Unsplash';

const api = new Unsplash('apikey');

ReactDOM.render(
  <React.StrictMode>
    <App api={api} />
  </React.StrictMode>,
  document.getElementById('root')
);
