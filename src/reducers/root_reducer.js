import {combineReducers} from 'redux';
import Beers from './beers';
import Cart from './cart';
const rootReducer = combineReducers({
  Beers:Beers,
  Cart:Cart
})
export default rootReducer
