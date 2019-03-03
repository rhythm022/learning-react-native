import * as React from 'react';
import AppText from './AppText';
import { StyleSheet } from 'react-native';
const SmallText = (props) => {
    const { children, style, } = props;
    return (<AppText style={[styles.smallText, style]}>{children}</AppText>
    // <AppText style={[]}>{children}</AppText>
    );
};
const styles = StyleSheet.create({
    smallText: {
        fontSize: 11,
    }
});
export default SmallText;
//# sourceMappingURL=SmallText.js.map