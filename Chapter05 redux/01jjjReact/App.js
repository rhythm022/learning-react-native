import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { increment, decrement, zero } from './src/actions';
import store from './src/TallyStore';
//组件的state直接向store请求，而不是以props的方式向父组件请求
export default class Countly extends Component {
  constructor(props){
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      tally: store.getTally()//组件初始化时向storeServicer请求state(请求数据)
    }
    store.addChangeListener(this.updateState);//storeServicer的数据变化时组件要向storeServicer请求state
  }

  componentWillUnmount() {
    store.removeChangeListener(this.updateState)
  }
  updateState() {
    this.setState({
      tally: store.getTally()
    })
  }

  render() {
    return(
      <View style = { styles.container } >
        <Text style={styles.appName}>
          Countly
        </Text>
        <Text style={styles.tally}>
          {/*  back */}
          {/* 这个tally不是model层的tally */}
          Tally:{this.state.tally.count}
        </Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={zero} style={styles.button}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  appName:{
    fontSize:20,
    textAlign:"center",
    marginBottom: 10,
  },
  tally:{
    fontSize:25,
    textAlign:"center",
    color:"#ccc",
    marginBottom:10,
  },
  button:{
    backgroundColor:'green',
    width:100,
    padding:20,
    marginBottom:10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

AppRegistry.registerComponent("Countly",()=>Countly)