import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import './index.scss';
import Router from './components/Layout/Router';
import { persistor, store } from './store';

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate persistor={ persistor } loading = { null }>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// Проверяется, активирован ли интерфейс горячей замены модулей
if (module.hot) {
  // Принимается горячее обновление hot update
  module.hot.accept();
}