import * as React from 'react';
import { View, StyleSheet, Text, LayoutAnimation } from 'react-native';
import OnboardingButtons from './OnboardingButtons'
import OnboardingPanel from './OnboardingPanel'

import onboardingContent from '../config/onboarding'

import CollapsibleView from './CollapsibleView';
import AppText from '../components/AppText';

export interface OnboardingProps {
  navigation: any,
}

export interface OnboardingState {
  currentIndex: number,
  isDone: boolean,
}

export default class OnboardingComponent extends React.Component<OnboardingProps, OnboardingState> {
  constructor(props: OnboardingProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      isDone: false,
    };
  }

  public render() {

    return (
      <View style={styles.container}>
        <CollapsibleView
          style={styles.container}
          hide={this.state.isDone}
        >
          <View style={styles.Panel}>
            {onboardingContent.map((panel, i) => (
              <OnboardingPanel
                key={i}
                style={i !== this.state.currentIndex ? { width: 0 } : undefined}
                backgroundColor={panel.backgroundColor}
                uri={panel.uri}
                message={panel.message}
              />
            ))}
          </View>
          <OnboardingButtons
            moveNext={this.moveNext}
            movePrevious={this.movePrevious}
            moveFinal={this.moveFinal}

            totalItems={onboardingContent.length}
            currentIndex={this.state.currentIndex}
          />
        </CollapsibleView>
        <CollapsibleView
         hide={!this.state.isDone}
         >
         <View style={styles.textContainer}>
          <AppText style={[styles.doneText]}>Let's read the TOP250 movies!</AppText>

         </View>
        </CollapsibleView>
      </View>
    );
  }

  transitionToNextPanel = (Index: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ currentIndex: Index })
  }
  movePrevious = () => { this.transitionToNextPanel(this.state.currentIndex - 1) }
  moveNext = () => { this.transitionToNextPanel(this.state.currentIndex + 1) }
  moveFinal = () => {
    LayoutAnimation.configureNext({
      duration: 1250,
      update: {
        springDamping: 0.4,
        type: LayoutAnimation.Types.spring
      }
    })

    this.setState({ isDone: true })
    setTimeout(() => {
      this.props.navigation.push('Home')
    }, 1250);
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
  textContainer:{
    paddingHorizontal: 15,
    marginHorizontal: 0,
  },
  doneText: {
    fontSize: 40,
    paddingHorizontal: 15,
    marginHorizontal: 0,
  }
});