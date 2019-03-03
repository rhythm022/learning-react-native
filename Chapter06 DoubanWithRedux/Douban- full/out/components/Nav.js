import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import Onboarding from '../animation/Onboarding';
import { createAppContainer, createStackNavigator } from 'react-navigation';
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Intro: IntroScreen,
    onboarding: Onboarding,
}, {
    initialRouteName: "Intro",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    },
    navigationOptions: {},
});
export default createAppContainer(AppNavigator);
//# sourceMappingURL=Nav.js.map