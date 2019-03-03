import * as React from 'react';
import { View,StyleSheet } from 'react-native';

import Button from './Button'

interface LinkButtonProps {
    style?:any
    onPress:any,

    active?:boolean,
}

const LinkButton: React.SFC<LinkButtonProps> = ({
    style,
    onPress,

    children,
    ...rest,
}) => (
    <Button
      style={[styles.container,style]}
      onPress={onPress}
      {...rest}
    >
        {children}
    </Button>
)

const styles = StyleSheet.create({
    container:{
        borderWidth: 0,
    },
});

export default LinkButton