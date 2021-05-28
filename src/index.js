import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.scss';
import Chat from './components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Chat />
  </BrowserRouter>,
  document.getElementById('root')
);

// Проверяется, активирован ли интерфейс горячей замены модулей
if (module.hot) {
  // Принимается горячее обновление hot update
  module.hot.accept();
}