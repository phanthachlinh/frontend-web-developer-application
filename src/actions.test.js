import {AddToCart,RemoveFromCart,ChangeCart} from './actions';
import {configure,mount} from 'enzyme';
import * as Types from './types';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
it('returns valid payload from AddToCart',()=>{
  let payload = 6584;
  expect(AddToCart(6584)).toEqual({type: Types.ADD_TO_CART,payload:payload})
});
it('returns valid payload from RemoveFromCart',()=>{
  let payload = 6584;
  expect(RemoveFromCart(6584)).toEqual({type: Types.REMOVE_FROM_CART,payload:payload})
});
it('returns valid payload from ChangeCart',()=>{
  let payload = 6584;
    expect(ChangeCart(6584)).toEqual({type: Types.CHANGE_QUANTITY,payload:payload})
})
