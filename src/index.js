import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Chat from './components/Chat/Chat';

ReactDOM.render(
  <Chat />,
  document.getElementById('root')
);

// Проверяется, активирован ли интерфейс горячей замены модулей
if (module.hot) {
  // Принимается горячее обновление hot update
  module.hot.accept();
}