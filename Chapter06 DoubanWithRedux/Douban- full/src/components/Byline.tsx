import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as globalStyles from '../styles/globals';
import SmallText from './SmallText';

interface BylineProps {
  style?: any,

  date: string,//text
  genres: string,//text
  author: string,//text
}
//文字布局组件(基于smallText组件布局)
const Byline: React.SFC<BylineProps> = (props) => {
  const {
    style,

    date,
    author,
    genres,
  } = props
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SmallText>
          {date}
        </SmallText>
        <SmallText>
          {author}
        </SmallText>
      </View>

      {genres ? (
        <View style={styles.row}>
          <SmallText style={styles.genres}>
            {genres}
          </SmallText>
        </View>
      ) : null}
    </View>)
};

//含container,row,smallText:location，smallText:date,smallText:author的布局风格
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  genres: {
    color: globalStyles.MUTED_COLOR
  }
});


export default Byline;