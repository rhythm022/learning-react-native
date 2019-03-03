import * as React from 'react';
import AppText from './AppText'
import { StyleSheet } from 'react-native';

interface SamllTextProps {
  children:any,
  style?:any,
}
//文字组件(在AppText基础上，装饰上smallText的样式风格)
const SmallText: React.SFC<SamllTextProps> = (props) => {
  const { 
    children,
    style,
   } = props
  return (
    <AppText style={[styles.smallText,style]}>{children}</AppText>
  );

};
const styles = StyleSheet.create({
  smallText:{
    fontSize:11,
  }
});
export default SmallText;