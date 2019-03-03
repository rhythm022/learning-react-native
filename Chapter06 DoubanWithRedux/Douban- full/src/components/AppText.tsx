import * as React from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/globals';

interface AppTextProps {
  style:any[],
  children:any,
}
//文字组件(装饰上COMMON.text的样式风格)
const AppText: React.SFC<AppTextProps> = (props) => {
  const { 
    children,
    style,
   } = props
  return (
    <Text style={[globalStyles.COMMON.text,...style]}>
      {children}
    </Text>
  );
};

export default AppText;