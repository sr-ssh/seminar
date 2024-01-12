import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './user';
import { combineReducers } from '@reduxjs/toolkit';
import TokenReducer from './user/token';

const PersistConfig = (reducerName: string) => ({
    key: reducerName,
    storage,
});

export const RootReducer = combineReducers({
    token: persistReducer(PersistConfig('token'), TokenReducer),
    user: persistReducer(PersistConfig('user'), UserReducer),
});