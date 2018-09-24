import React from 'react';
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Root from '../root';
import Navbar from '../components/navbar';
import Cart from '../pages/cart';
import Listing from '../pages/Listing';
configure({adapter: new Adapter()});
let wrapped;
afterEach(()=>{
  wrapped.unmount();
})
it('Contains Navbar',()=>{
  wrapped = mount(<Root><App /></Root>);
  expect(wrapped.find(Navbar).length).toEqual(1);
})
