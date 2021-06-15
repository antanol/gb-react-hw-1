import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import { profileReducer } from './reducers/profile';
import { messagesReducer } from './reducers/chat';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: messagesReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);