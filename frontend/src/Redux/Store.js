import { configureStore } from '@reduxjs/toolkit'
import { adminAuthSlice, userAuthSlice } from './Slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    UserData: userAuthSlice.reducer,
    adminData: adminAuthSlice.reducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

