import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar';
import Listing from './pages/listing';
import Cart from './pages/cart';
import Checkout from './pages/checkout'
import registerServiceWorker from './registerServiceWorker';
import {Switch, BrowserRouter as Router,Route} from 'react-router-dom';
import rootReducer from './reducers/reducer_root';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer);
let persistor = persistStore(store)
ReactDOM.render(
<div>



    <div>

    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>

  </PersistGate>
    </Provider>
  </div>

</div>, document.getElementById('root'));
registerServiceWorker();
