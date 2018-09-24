import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RemoveFromCart,ChangeCart} from '../actions';
class Cart extends React.Component {
  componentDidMount() {

  }
  findCollection(item){
    return item.collectionId === this

  }
  removeClickHandler(e){
    this.props.RemoveFromCart(e.target.value)
    console.log(e.target.value);
    console.log()
  }
  getQuantity(){
    console.log(this)
    return <p>3</p>
  }
  handleChange(x,e){
    console.log(e)
    console.log(x)
  this.props.ChangeCart({newItem:x,newValue:e.target.value})
  }
  render() {
    let collections =   this.props.Cart.map((item)=>{
        return this.props.Products.find(this.findCollection.bind(item.collectionId))
      });
      console.log(collections)
   let renderColletion = collections.map(
      x=>{
        let quantity = this.props.Cart.find((cartItem)=>x.collectionId == cartItem.collectionId).quantity;

      return(
       <li key={x.collectionId} className="list-group-item">{x.collectionName}
         <div className="input-group input-group-sm mb-3">
           <div className="input-group-prepend">
             <span className="input-group-text" id="inputGroup-sizing-sm">Amount</span>
           </div>
           <input type="text" defaultValue={quantity} onChange={this.handleChange.bind(this,x)} class="form-control" aria-label="Amount" aria-describedby="inputGroup-sizing-sm" />
           <button className="btn">Edit</button>
         </div>
          <button value={x.collectionId} onClick={this.removeClickHandler.bind(this)} className='btn alert'>
            remove
          </button>
        </li>)
      })
      console.log(this.props.Cart)
    return (
      <div>
        <ul className="list-group">
          {renderColletion}
        </ul>
        <Link to='/Checkout'><button className="btn">Checkout</button></Link>
      </div>);
  }
}
function mapStateToProps(state){
  return {Products:state.Products,
          Cart:state.Cart}
}
function mapStateToDispatch(dispatch){
  return bindActionCreators({
    RemoveFromCart:RemoveFromCart,
    ChangeCart:ChangeCart

  },dispatch)
}
export default connect(mapStateToProps,mapStateToDispatch)(Cart)
