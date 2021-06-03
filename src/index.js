import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';

import './index.scss';
import Router from './components/Layout/Router';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// Проверяется, активирован ли интерфейс горячей замены модулей
if (module.hot) {
  // Принимается горячее обновление hot update
  module.hot.accept();
}