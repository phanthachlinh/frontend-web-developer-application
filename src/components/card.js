import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddToCart} from '../actions';
class Card extends React.Component {
  addDefaultSrc(e){
    e.target.src = require('../err.jpg')
  }
  handleClick(e){
this.props.AddToCart(this.props.collectionId)
  }
  render() {
    return (
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={this.props.artwork} onError={this.addDefaultSrc} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.collectionName}</h5>
          <p className="card-text">Price: {this.props.price +' '+this.props.currency}</p>
          <button href="#" onClick={this.handleClick.bind(this)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    );
  }
}
function mapStateToDispatch(dispatch){
  return bindActionCreators({
    AddToCart:AddToCart
  },dispatch)
}
export default connect(null,mapStateToDispatch)(Card)
