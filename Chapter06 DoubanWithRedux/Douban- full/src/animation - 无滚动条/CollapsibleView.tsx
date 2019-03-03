import * as React from 'react';
import { StyleSheet, View } from 'react-native';

interface CollapsibleViewProps {
    style?: any,
    hide: boolean,
}

const CollapsibleView: React.SFC<CollapsibleViewProps> = ({
    style,
    hide,
    children,
}) => {
    return (
        <View style={[styles.container, hide ? styles.hidden : {}]}>
            <View style={[styles.absoluteContainer, style]}>
                {children}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hidden: {
        height: 0,
        flex: 0,
    },
    absoluteContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#343336',
      


    },
});
export default CollapsibleView