import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button'
import LinkButton from './LinkButton';
import { LIGHT_OVERLAY_COLOR } from '../styles/globals'


interface OnboardingButtonsProps {
  movePrevious: Function,
  moveNext: Function,
  moveFinal:Function,
  
  totalItems: any,
  currentIndex: number,
}

const OnboardingButtons: React.SFC<OnboardingButtonsProps> = ({
  totalItems,
  currentIndex,
  movePrevious,
  moveNext,
  moveFinal,
}) => (
    <View
      style={styles.container}
    >
      <LinkButton
        onPress={movePrevious}
        active={currentIndex > 0}
      >
        Previous
    </LinkButton>
  {
    currentIndex === totalItems - 1 ?(
      <Button
      onPress={moveFinal}
    >
      Done
    </Button>
    ):(
      <Button
      onPress={moveNext}
      active={currentIndex < totalItems - 1}
    >
      Next
    </Button>
    )
  }
    </View>
  )

const styles = StyleSheet.create({
  container: {
    flex:0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: LIGHT_OVERLAY_COLOR,

    position:'absolute',//
    bottom:0,
    left:0,
    right:0,


  }
});

export default OnboardingButtons