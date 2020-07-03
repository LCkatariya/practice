import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoadingButton from './AApp';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Cardd from './Card.js';
import Dropdownn from './Dropdownn';

ReactDOM.render(
  <React.StrictMode>
    <Dropdownn />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
