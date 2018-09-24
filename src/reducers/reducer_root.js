import {combineReducers} from 'redux';
import Products from './reducer_product';
import Cart from './reducer_cart';
const rootReducer = combineReducers({
  Products: Products,
  Cart: Cart
})
export default rootReducer
