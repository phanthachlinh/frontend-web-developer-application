import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './reducers/reducer_root';
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
let persistor = persistStore(store)
export default ({children,initialState ={}})=>{
  return(
    <Provider store={store} initialState={initialState}>
       <PersistGate loading={null} persistor={persistor}>
         {children}
       </PersistGate>
    </Provider>
  )
}
