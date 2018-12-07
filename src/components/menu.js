import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class Header extends React.Component{
  render(){
    return(
      <header>
        <div className='header__title'>
          <Link to='/'>Punk Beers</Link>
        </div>
        <div className='cart__wrapper_outer'>
        <Link to='/cart'>
        <img className='cart__icon' src={require('../images/cart.png')} alt='cart image'/>
        <div className='cart__wrapper_inner'>
        <div className='cart__count'>
        {this.props.Cart.length}
        </div>
        </div>
        </Link>
        </div>
      </header>
    )
  }
}
function mapStateToProps(state){
  return {
    Cart: state.Cart
  }
}
export default connect(mapStateToProps)(Header)
