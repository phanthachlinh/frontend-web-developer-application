import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/actions';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'reactstrap';
class Beer extends React.Component{
  render(){
  return (
    <Col col='12' col-sm='12' col-md='12' col-lg='12' col-xl='12'>
      <Link to={'beer/'+this.props.beer.id}>
    <div className='card'>

      <img className="card-img-top" src={this.props.beer.image_url} alt="Beer" />
        <div className="card-body">
        <h5 className="card-title">{this.props.beer.name}</h5>
        <p className="card-text">{this.props.beer.description.substring(0,30)+'....'}</p>

        </div>
    </div>
    </Link>
  </Col>
  )
}
}
const mapDispatchToProps = dispatch=>({
  addToCart: beer => addToCart(beer)
})
export default connect(null,mapDispatchToProps)(Beer)
