import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import {profileReducer} from './reducers/profile';
import {messagesReducer} from './reducers/chat';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    profile: profileReducer,
    chats: messagesReducer
});

// для Redux панели в инструментах разбаботчика вместо
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReduser,
    composeEnhancers(applyMiddleware(thunk))
);