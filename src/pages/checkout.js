import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Checkout extends React.Component {
  findCollection(item){
    return item.collectionId === this

  }
  render() {
    let collections =   this.props.Cart.map((item)=>{
        return this.props.Products.find(this.findCollection.bind(item.collectionId))
      });
    let renderCollection = collections.map(
         x=>{
           let quantity = this.props.Cart.find((cartItem)=>x.collectionId == cartItem.collectionId).quantity;
           return(
            <li key={x.collectionId} className="list-group-item">{x.collectionName}
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Amount</span>
                </div>
                <input type="text" defaultValue={quantity} class="form-control" aria-label="Amount" aria-describedby="inputGroup-sizing-sm" />
      
              </div>
             </li>)

         });
         console.log(renderCollection)
    return (
      <div>
        {renderCollection}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {Products:state.Products,
          Cart:state.Cart}
}


export default connect(mapStateToProps)(Checkout)
