import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './globals.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
