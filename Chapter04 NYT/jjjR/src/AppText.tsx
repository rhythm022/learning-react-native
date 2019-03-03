import * as React from 'react';
import { Text } from 'react-native';
import * as globalStyles from './styles/globals';

interface AppTextProps {
  style:any[],
  children:any,
}

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