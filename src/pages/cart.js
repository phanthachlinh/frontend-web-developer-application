import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart,updateCart} from '../actions/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'reactstrap';
class Cart extends React.Component{
  componentDidMount() {
  }
  getBeerInfo(id){
    return this.props.Beers.find(function(beer)
    {
      return beer.id == id
    })
  }
  deleteClickHandler(id){
    this.props.removeFromCart(id)
  }
  handleValueChange(e){
  }
  selectChangeHandler(id,e){
    this.props.updateCart({id:id,quantity:e.target.value})
  }
  render(){
    let itemsInfo = [];
    for(let i = 0; i<this.props.Cart.length; i++){
      itemsInfo.push([this.props.Beers.find((item)=>{
        return item.id == this.props.Cart[i].id
      }
    )
  ,this.props.Cart[i].quantity])
}
    let renderItems = itemsInfo.map((item)=>{
      let selectHTML = []
      for(let i =1; i<11;i++){

        selectHTML.push(<option key={i} value={i}>{i}</option>);


      }
      return(
        <li key={item[0].id} className="list-group-item">
          <Container>
            <Row>
              <Col xs='12' md='3'>
                <div className='cart__image_wrapper flex-item'>
                  <img className='cart__image' src={item[0].image_url} />
                </div>
                </Col>
                <Col xs='12' md='3'>
                  <div className='cart__text flex-item'>
                    {item[0].name}
                  </div>
                </Col>
                <Col xs='12' md='3'>
                  <Container>
                    <Row>
                      <Col sm='6'>
                        <div className='flex-item'>
                          <select className="form-control form-control-lg" value={item[1]} onChange={this.selectChangeHandler.bind(this,item[0].id)}>
                            {selectHTML}
                          </select>
                        </div>
                      </Col>
                      <Col sm='6'>
                        <div className='flex-item'>
                          <button onClick={this.deleteClickHandler.bind(this,item[0].id)} >delete</button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
          </Container>
        </li>
      )
    })
    return(
      <div className='content__wrapper'>
      <ul className="list-group">
      {renderItems}
      </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    Beers: state.Beers,
    Cart: state.Cart
  }
}
function mapDispatchToProps(dispatch){
  return {
    removeFromCart: id=>dispatch(removeFromCart(id)),
    updateCart: item=>dispatch(updateCart(item))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
