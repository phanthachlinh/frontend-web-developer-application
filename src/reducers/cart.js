import {ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART
}from '../actions/consts';

export default function(state=[],action){
  switch (action.type) {
    case ADD_TO_CART:
      let existingItem = state.find((item)=>{
        return item.id == action.payload.id
      });
      if(typeof existingItem === 'undefined'){
          console.log(action.payload)
          return [...state,action.payload];
      }else{
        state[state.indexOf(existingItem)].quantity = action.payload.quantity;
        return [...state]
      }
      case REMOVE_FROM_CART:
        let removeItem = state.find((item)=>{
          return item.id == action.payload
        })
        state.splice(state.indexOf(removeItem),1)
        console.log(state)
        return [...state]
        case UPDATE_CART:
          let item = state.find(item=>{
            return item.id == action.payload.id
          });
          console.log(item);
          let indexOfItem = state.indexOf(item);
          state[indexOfItem].quantity = action.payload.quantity
          return [...state]
    default:
      return state
  }
}
