import { Provider } from 'react-redux';
import HomeScreen from './components/HomeScreen'
import createStore from './createStore';

import React, { Component } from 'react'
import { Text, View,AppRegistry } from 'react-native'

import Nav from './components/Nav';

const store =  createStore();

export default class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <Nav/>
      </Provider>
    )
  }
}


