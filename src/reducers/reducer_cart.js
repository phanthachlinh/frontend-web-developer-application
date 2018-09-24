import * as Types from '../types';
export default function(state=[],action){
  switch(action.type){
    default:
      return state;
    case Types.ADD_TO_CART:
      if(state.find(FindItem.bind(action.payload))){
        let arr = state.map(x=>{
          if(action.payload == x.collectionId){
            x.quantity++;
          }
          return x;
        })
        return arr ;

      }else{
        return [...state,{collectionId:action.payload,quantity:1}];
      }

      break;
      case Types.REMOVE_FROM_CART:
        state.splice(state.indexOf(state.find(FindItem.bind(action.payload))),1);
        return [...state]
        break;
      case Types.CHANGE_QUANTITY:
        state[state.indexOf(state.find(FindItem.bind(action.payload.newItem.collectionId)))].quantity = parseInt(action.payload.newValue)

        return [...state]
  }
}
function FindItem(item){
  if(item.collectionId == this){
  return true
  }
  return false
}
