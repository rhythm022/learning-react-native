import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar, Button, } from 'react-native';
import AppText from './AppText';
import Title from './Title';
import * as globalStyles from '../styles/globals';
StatusBar.setBarStyle('dark-content');
export default class IntroScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        return (<View style={[globalStyles.COMMON.pageContainer, styles.container]}>
                <TouchableOpacity onPress={() => navigation.push('Home', {})}>
                  <Title>React Native Douban Reader</Title>
                  <AppText style={[]}>
                      Start Reading
                  </AppText>
                </TouchableOpacity>
            </View>);
    }
}
IntroScreenComponent.navigationOptions = {
    title: 'Intro',
    headerRight: (<Button onPress={() => alert('This is a button!')} title="Info" color="#fff"/>),
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
//# sourceMappingURL=IntroScreen.js.map