import React,{Component} from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class Counter extends Component {
    render(){
        const {
            increment,
            decrement,
            zero,
            count,
        } = this.props
        return (
            <View style = { styles.container } >
            <Text style={styles.appName}>
              Countly
            </Text>
            <Text style={styles.tally}>
              {/*  back */}
              {/* 这个tally不是model层的tally */}
              Tally:{count}
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
        )
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