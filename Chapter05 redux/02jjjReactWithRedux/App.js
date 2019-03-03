import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { increment, decrement, zero } from './src/actions';
// import TallyStore from './src/TallyStore';
import store from './src/store'

export default class Countly extends Component {
  constructor(props){
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      tally: store.getState(),//组件初始化时向storeServicer请求state
      unsubscribe: store.subscribe(this.updateState)//storeServicer的数据变化时组件要向storeServicer请求state
    }
  }
 
  componentWillUnmount() {
    this.state.unsubscribe();
  }
  updateState() {
    this.setState({
      tally: store.getState()
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
        {/* 对比onPress={increment} */}
        <TouchableOpacity onPress={() => store.dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => store.dispatch(zero())} style={styles.button}>
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