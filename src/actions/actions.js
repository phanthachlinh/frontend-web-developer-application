import {
  FETCH_BEERS,
  GET_BEER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART
} from './consts';
import axios from 'axios';
export function fetchBeers(){
  return {
    type: FETCH_BEERS,
    payload: axios.get('https://api.punkapi.com/v2/beers')
  }
}
export function addToCart(beer){
  console.log('wfe');
  return {
    type: ADD_TO_CART,
    payload: beer
  }
}
export function removeFromCart(id){
  console.log('wwww'+id);
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}
export function updateCart(item){
  console.log(item);
  return {
    type: UPDATE_CART,
    payload: item
  }
}
export function getBeer(id){
  return {
    type: GET_BEER,
    payload: id
  }
}
