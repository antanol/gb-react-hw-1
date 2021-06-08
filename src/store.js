import { createStore, combineReducers } from 'redux';
import {profileReducer} from './reducers/profile';
import {messagesReducer} from './reducers/chat';

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: messagesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);