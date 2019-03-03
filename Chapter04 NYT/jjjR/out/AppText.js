import * as React from 'react';
import { Text } from 'react-native';
import * as globalStyles from './styles/globals';
const AppText = (props) => {
    const { children, style, } = props;
    return (<Text style={[globalStyles.COMMON.text, ...style]}>
      {children}
    </Text>);
};
export default AppText;
//# sourceMappingURL=AppText.js.map