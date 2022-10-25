import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import ScrollToTop from './helpers/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);