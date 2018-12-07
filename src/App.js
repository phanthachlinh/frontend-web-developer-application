import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBeers} from './actions/actions';
import {bindActionCreators} from 'redux';
import Beer from './components/beer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'reactstrap';
class App extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    console.log(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.Beers)
  }
  render() {
    let renderBeers = this.props.Beers.map((beer)=>{
      return <Beer key={beer.id} beer={beer}/>
    });
    return (
      <Container>
        <Row>
        {renderBeers}
      </Row>
    </Container>
    );
  }
}
function mapStateToProps(state){
  return {
    Beers: state.Beers
  }
}
function mapStateToDispach(dispatch){
  return bindActionCreators({
    fetchBeers:fetchBeers
  },dispatch)
}
export default connect(mapStateToProps,mapStateToDispach)(App);
