import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    StatusBar,
    Button,
} from 'react-native';
import AppText from './AppText'
import Title from './Title'
import * as globalStyles from '../styles/globals'

StatusBar.setBarStyle('dark-content')
export interface IntroScreenProps {
    navigation:any,
}

export interface IntroScreenState {
}

export default class IntroScreenComponent extends React.Component<IntroScreenProps, IntroScreenState> {

    static navigationOptions ={
        title: 'Intro',
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
      
    }
    constructor(props: IntroScreenProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        const { 
            navigation
         } = this.props
        return (
            <View style={[globalStyles.COMMON.pageContainer,styles.container]}>
                <TouchableOpacity
                  onPress={()=>navigation.push('onboarding',{})}
                >
                  <Title>React Native Douban Reader</Title>
                  <AppText style={[]}>
                      Start Reading
                  </AppText>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});