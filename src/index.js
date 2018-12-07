import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root_reducer.js';
import Promise from 'redux-promise';
import Header from './components/menu';
import Beer from './pages/beer';
import Cart from './pages/cart';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,{},applyMiddleware(Promise));
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <Router>
    <>
    <Header />
    <Switch>
      <Route path='/cart' component={Cart} />
      <Route path='/beer/:id' component={Beer} />
      <Route exact path='/' component={App} />
    </Switch>
    </>
  </Router>
  </PersistGate>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
