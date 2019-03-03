import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import { LIGHT_OVERLAY_COLOR } from '../styles/globals';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../config/device';
const MINIMUM_IMAGE_HEIGHT = 460;
const IMAGE_SIZE = 300;
const OnboardingPanel = ({ style, backgroundColor, uri, message, }) => (<View style={[styles.container, { backgroundColor }, style]}>
      <View style={styles.content}>
        <AppText style={[]}>{message}
        </AppText>
      </View>
      <View style={styles.row}>
        <Image source={{ uri }} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}/>
      </View>
    </View>);
const calcTextContainerMaxHeight = (deviceHeight, minImageHeight) => {
    if ((deviceHeight - minImageHeight) < (deviceHeight * 0.25)) {
        return deviceHeight - minImageHeight;
    }
    return undefined;
};
const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.25,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 20,
        marginBottom: 10,
        backgroundColor: LIGHT_OVERLAY_COLOR,
        maxHeight: calcTextContainerMaxHeight(DEVICE_HEIGHT, MINIMUM_IMAGE_HEIGHT)
    },
    row: {
        flex: 1,
    }
});
export default OnboardingPanel;
//# sourceMappingURL=OnboardingPanel.js.map