import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import './index.scss';
import Router from './components/Layout/Router';
import { store, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CssBaseline />
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// Проверяется, активирован ли интерфейс горячей замены модулей
if (module.hot) {
  // Принимается горячее обновление hot update
  module.hot.accept();
}