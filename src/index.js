import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './globals.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
