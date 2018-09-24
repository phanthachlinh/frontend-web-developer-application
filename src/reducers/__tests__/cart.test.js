import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from '../products.json';
import Reducer from '../reducer_cart';

import * as Types from '../../types';
configure({adapter: new Adapter()});
it('adds a product',()=>{

  expect(Reducer([],{type:Types.ADD_TO_CART,payload:857})).toEqual([{collectionId:857,quantity:1}])
});
it('Removes a product',()=>{

  expect(Reducer([{collectionId:857,quantity:1}],{type:Types.REMOVE_FROM_CART,payload:857})).toEqual([])
});
it('Changes quantity of a product',()=>{
  expect(Reducer([{collectionId:857,quantity:1}],{type:Types.CHANGE_QUANTITY,payload:{newItem:{collectionId:857},newValue:14}})).toEqual([{collectionId:857,quantity:14}])
});
