import { createStore, combineReducers } from 'redux';
import {profileReducer} from './reducers/profile';
import {addReducer} from './reducers/chat';

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: addReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);