import * as React from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/globals';
//文字组件(装饰上COMMON.text的样式风格)
const AppText = (props) => {
    const { children, style, } = props;
    return (<Text style={[globalStyles.COMMON.text, ...style]}>
      {children}
    </Text>);
};
export default AppText;
//# sourceMappingURL=AppText.js.map