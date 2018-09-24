import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import Listing from './pages/listing';
import Checkout from './pages/checkout';
import Cart from './pages/cart';
export default ()=>{
  return(
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Checkout" component={Checkout}/>
          <Route path="/Cart" component={Cart}/>
          <Route exact path="" component={Listing}/>
        </Switch>
      </div>
    </Router>
    )

}
