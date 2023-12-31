import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);

const introRoot = document.getElementById('introRoot');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  introRoot,
);

reportWebVitals();

