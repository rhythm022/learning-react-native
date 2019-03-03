

//-----------------  CounterContainer组件  -----------------------//
import {  connect } from 'react-redux';
import { increment, decrement, zero } from './src/actions';
import Counter from './src/Counter';

const mapStateToProps = state => ({//state是Provider提供的storeServicer的state
  count: state.count
})
const mapDispatchToProps = dispatch => ({//dispatch是Provider提供的storeServicer的dispatch
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  zero: () => dispatch(zero())
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)

//----------------- end CounterContainer组件  -----------------------//
//----------------- App组件  -----------------------//
import React, { Component } from 'react';
import {  Provider } from 'react-redux';
import store from './src/store';

export default class Countly extends Component {
  render() {
    return(
     <Provider store={store}>
     <CounterContainer/>   
     </Provider>
    );
  }
}
//----------------- end App组件  -----------------------//



