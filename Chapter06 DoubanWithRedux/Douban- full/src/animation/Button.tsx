import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const BORDER_COLOR = '#fff';
const BG_COLOR = 'transparent';
const TEXT_COLOR = '#fff';
const DISABLED_COLOR = `${TEXT_COLOR}5`
export interface ButtonProps {
    style?: any ,
    onPress: any,

    active?: boolean,
}



export const Button: React.SFC<ButtonProps> = ({
    style,
    onPress,

    active = true,

    children,
    ...rest,
}) => (
        <TouchableOpacity
            style={[styles.container,style,!active?styles.disabledButton:{}]}
            onPress={active?onPress:null}
            activeOpacity={active ? 0.7 : 1}
            {...rest}
        >
          <Text style={[styles.Text,!active?styles.disabledText:{}]}>
              {children}
          </Text>
        </TouchableOpacity>
    )

const styles = StyleSheet.create({
    container:{
        borderStyle:'solid',
        borderColor: BORDER_COLOR,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,

        backgroundColor: BG_COLOR,

        paddingVertical: 8,
        paddingHorizontal: 15,

    },
    disabledButton:{ 
        borderColor: DISABLED_COLOR,
     },
    Text:{
        color:TEXT_COLOR,
        fontWeight:'bold',
    },
    disabledText:{
        color: DISABLED_COLOR,
    },
});

export default Button;