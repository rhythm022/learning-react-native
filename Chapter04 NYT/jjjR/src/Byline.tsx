import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as globalStyles from './styles/globals';
import SmallText from './SmallText';

interface BylineProps {
  date: Date,
  location: string,
  author: string,
}

const Byline: React.SFC<BylineProps> = (props) => {
  const {
    date,
    author,
    location,
  } = props
  return (
    <View>
      <View style={styles.row}>
        <SmallText>
          {date.toLocaleDateString()}
        </SmallText>
        <SmallText>
          {author}
        </SmallText>
      </View>

      {location ? (
        <View style={styles.row}>
          <SmallText style={styles.location}>
            {location}
          </SmallText>
        </View>
      ) : null}
    </View>)
};


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  location: {
    color: globalStyles.MUTED_COLOR
  }
});


export default Byline;