import * as Types from './types';
export function AddToCart(collectionId){
  return {type: Types.ADD_TO_CART,
          payload: collectionId}
}
export function RemoveFromCart(collectionId){
  return {type: Types.REMOVE_FROM_CART,
          payload: collectionId}
}
export function ChangeCart(newItem){
  return {type: Types.CHANGE_QUANTITY,
          payload: newItem}
}
