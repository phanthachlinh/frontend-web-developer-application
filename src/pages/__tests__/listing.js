import React from 'react';
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Listing from '../listing';
import Card from '../../components/card';
import Root from '../../root';
import data from '../../reducers/products.json';
configure({adapter: new Adapter()});
it('displays cards',()=>{
  let wrapped= mount(<Root initialState={data.results}><Listing/></Root>);
  wrapped.update();
  expect(wrapped.contains(Card)).toEqual(true)
})
