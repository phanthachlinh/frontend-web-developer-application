import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'reactstrap';

class Beer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      quantity: 0
    }
  }
  componentDidMount() {
    let cartItem = this.props.Cart.find(item=>{
      return item.id == this.props.match.params.id
    });
    let placeholder = 1;
    if(typeof cartItem != 'undefined'){
      placeholder = cartItem.quantity
    }
    this.setState({quantity:placeholder})
}
componentWillReceiveProps(nextProps) {
}
handleChange(e){
    console.log(e.target.value);
    this.setState({quantity:e.target.value})
}
  handleClick(e){
    this.props.addToCart({id:this.props.match.params.id,quantity:this.state.quantity})
  }
  errorHandler(e){
    e.target.src='https://process.arts.ac.uk/sites/all/modules/flashvideo/thumbnail_MIA.png';
  }
  handleDefault(e){
    e.preventDefault();
  }
  render(){
    let beer = this.props.Beers.find((beer)=>beer.id == this.props.match.params.id);

    let selectHTML = []
    for(let i =1; i<11;i++){

      selectHTML.push(<option key={i} value={i}>{i}</option>);


    }
  return (
    <Container className='beer__wrapper container'>
    <Row>
    <Col className='beer__image_wrapper' xs='12' md="6">
      <img className="card-img-top" src={beer.image_url} onError={this.errorHandler.bind(this)} alt="Beer" />
    </Col>
    <Col className='beer__info' xs='12' md='6'>
    <div className='beer__name'>
      {beer.name}

    </div>

    <p>{beer.description}</p>
    <form onSubmit={this.handleDefault}>
    <select onChange={this.handleChange.bind(this)} value={this.state.quantity}>
      {selectHTML}
    </select>
    <button className='btn' onSubmit={this.handleDefault} onClick={this.handleClick.bind(this)}>add to cart</button>
    </form>
    </Col>
    </Row>
    </Container>
  )
}
}
const mapDispatchToProps = dispatch=>({
  addToCart: beer => dispatch(addToCart(beer))
})
const mapStateToProps = state =>{
  return {
    Cart:state.Cart,
    Beers: state.Beers
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Beer)
