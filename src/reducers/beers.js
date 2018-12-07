import {FETCH_BEERS} from '../actions/consts';
export default function(state=[],action){

  if(action.error){
    return []
  }
  switch (action.type) {
    case FETCH_BEERS:
      return action.payload.data
    default:
      return state
  }
}
