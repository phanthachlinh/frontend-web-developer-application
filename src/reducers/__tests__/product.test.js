import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from '../products.json';
import Reducer from '../reducer_product';
configure({adapter: new Adapter()});
it('returns products',()=>{
  expect(Reducer()).toEqual(Products.results)
})
