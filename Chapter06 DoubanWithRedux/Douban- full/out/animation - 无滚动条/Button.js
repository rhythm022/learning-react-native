var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
const BORDER_COLOR = '#fff';
const BG_COLOR = 'transparent';
const TEXT_COLOR = '#fff';
const DISABLED_COLOR = `${TEXT_COLOR}5`;
export const Button = (_a) => {
    var { style, onPress, active = true, children } = _a, rest = __rest(_a, ["style", "onPress", "active", "children"]);
    return (<TouchableOpacity style={[styles.container, style, !active ? styles.disabledButton : {}]} onPress={active ? onPress : null} activeOpacity={active ? 0.7 : 1} {...rest}>
          <Text style={[styles.Text, !active ? styles.disabledText : {}]}>
              {children}
          </Text>
        </TouchableOpacity>);
};
const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: BORDER_COLOR,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        backgroundColor: BG_COLOR,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    disabledButton: {
        borderColor: DISABLED_COLOR,
    },
    Text: {
        color: TEXT_COLOR,
        fontWeight: 'bold',
    },
    disabledText: {
        color: DISABLED_COLOR,
    },
});
export default Button;
//# sourceMappingURL=Button.js.map