import { Provider } from 'react-redux';
import HomeScreen from './components/HomeScreen'
import createStore from './createStore';

import React, { Component } from 'react'
import { Text, View,AppRegistry } from 'react-native'

const store =  createStore();

export default class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    )
  }
}



// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class componentName extends Component {
//   constructor(props:any) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     );
//   }
// }