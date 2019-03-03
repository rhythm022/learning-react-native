import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as globalStyles from './styles/globals';
import AppText from './AppText';
const Title = (props) => {
    const { style, children, } = props;
    return (<AppText style={[styles.title, style]}>{children}</AppText>);
};
const styles = StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`,
    }
});
export default Title;
//# sourceMappingURL=Title.js.map