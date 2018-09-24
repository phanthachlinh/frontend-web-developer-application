import React from 'react';
import Card from '../components/card';
import {connect} from 'react-redux';

class Listing extends React.Component {
  componentDidMount() {

  }
  render() {
    let Cards = this.props.Products.map((x)=>
    <div key={x.collectionId} className="col-sm">
      <Card collectionName={x.collectionName} collectionId={x.collectionId} price={x.collectionPrice} currency={x.currency} artwork={x.artworkUrl60}/>
    </div>
    )
    return (
      <div className="container">

        <div className="row">
      {Cards}

        </div>

      </div>
    );
  }
}
function mapStateToProps(state){
  return {Products:state.Products}
}
export default connect(mapStateToProps)(Listing)
