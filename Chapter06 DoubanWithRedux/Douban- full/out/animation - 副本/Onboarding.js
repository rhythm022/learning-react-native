import * as React from 'react';
import { View, StyleSheet, Animated, LayoutAnimation } from 'react-native';
import OnboardingButtons from './OnboardingButtons';
import OnboardingPanel from './OnboardingPanel';
import onboardingContent from '../config/onboarding';
import CollapsibleView from './CollapsibleView';
import AppText from '../components/AppText';
import OnboardingProcess from './OnboardingProcess';
import { DEVICE_WIDTH } from '../config/device';
export default class OnboardingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.transitionToNextPanel = (nextIndex) => {
            Animated.timing(this.state.pan, {
                toValue: nextIndex * DEVICE_WIDTH * -1,
                duration: 300,
            }).start(() => this.setState({ currentIndex: nextIndex }));
        };
        this.movePrevious = () => { this.transitionToNextPanel(this.state.currentIndex - 1); };
        this.moveNext = () => { this.transitionToNextPanel(this.state.currentIndex + 1); };
        this.moveFinal = () => {
            LayoutAnimation.configureNext({
                duration: 1250,
                update: {
                    springDamping: 0.4,
                    type: LayoutAnimation.Types.spring
                }
            });
            this.setState({ isDone: true });
            setTimeout(() => {
                this.props.navigation.push('Home');
            }, 1250);
        };
        this.state = {
            currentIndex: 0,
            isDone: false,
            pan: new Animated.Value(0)
        };
    }
    render() {
        return (<View style={styles.container}>
        <CollapsibleView style={styles.container} hide={this.state.isDone}>
          <Animated.View style={[
            styles.Panel,
            { width: DEVICE_WIDTH * onboardingContent.length },
            {
                transform: [{
                        translateX: this.state.pan
                    }]
            }
        ]}>
            {onboardingContent.map((panel, i) => (<OnboardingPanel key={i} backgroundColor={panel.backgroundColor} uri={panel.uri} message={panel.message}/>))}
          </Animated.View>
          <OnboardingProcess totalItems={onboardingContent.length} pan={this.state.pan}/>
          <OnboardingButtons moveNext={this.moveNext} movePrevious={this.movePrevious} moveFinal={this.moveFinal} totalItems={onboardingContent.length} currentIndex={this.state.currentIndex}/>
        </CollapsibleView>
        <CollapsibleView hide={!this.state.isDone}>
         <View style={styles.textContainer}>
          <AppText style={[styles.doneText]}>Let's read the TOP250 movies!</AppText>

         </View>
        </CollapsibleView>
      </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Panel: {
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        paddingHorizontal: 15,
        marginHorizontal: 0,
    },
    doneText: {
        fontSize: 40,
        paddingHorizontal: 15,
        marginHorizontal: 0,
    }
});
//# sourceMappingURL=Onboarding.js.map