import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter,  routerMiddleware } from 'connected-react-router';

import { profileReducer } from './reducers/profile';
import { messagesReducer } from './reducers/chat';

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  profile: profileReducer,
  chats: messagesReducer
});

// для Redux панели в инструментах разбаботчика вместо
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);