import * as React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { DEVICE_WIDTH } from '../config/device';
const BAR_WIDTH = 250;
const COMPLETION_BAR_BOARDER_COLOR = '#fff';
const COMPLETION_BAR_BG_COLOR = 'transparent';
const COMPLETION_BAR_STATUS_BG_COLOR = '#fff6';
const OnboardingProcess = ({ totalItems, pan, }) => {
    return (<View style={styles.container}>
       <View style={styles.bar}>
         <Animated.View style={[
        styles.status,
        computeCompletetionBarWidth(totalItems, BAR_WIDTH, DEVICE_WIDTH, pan)
    ]}>
         </Animated.View>
       </View>
      </View>);
};
const computeCompletetionBarWidth = (itemCount, barWidth, deviceWidth, pan) => {
    const inputRange = [];
    const outputRange = [];
    for (let i = itemCount - 1; i >= 0; i -= 1) {
        inputRange.push(deviceWidth * i * -1);
        outputRange.push(barWidth * ((i + 1) / itemCount));
    }
    if (outputRange.length <= 1) {
        inputRange.push(inputRange[inputRange.length - 1]);
        outputRange.push(outputRange[outputRange.length - 1]);
    }
    return {
        width: pan.interpolate({
            inputRange,
            outputRange,
        })
    };
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
    },
    bar: {
        marginHorizontal: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COMPLETION_BAR_BOARDER_COLOR,
        width: BAR_WIDTH,
        height: 10,
        backgroundColor: COMPLETION_BAR_BG_COLOR,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    status: {
        backgroundColor: COMPLETION_BAR_STATUS_BG_COLOR,
        height: 8,
    },
});
export default OnboardingProcess;
//# sourceMappingURL=OnboardingProcess.js.map