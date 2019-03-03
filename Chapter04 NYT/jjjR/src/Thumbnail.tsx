import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Title from './Title'

interface ThumbnailProps {
  url: string,
  titleText: string,
  style: any
}

const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    style,
    url,
    titleText,
  } = props
  return (
    <View style={style}>
      {
        url.length > 0 ? (
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{ uri: url }}
            >
            </Image>
            <Title style={styles.title}>
              {titleText}
            </Title>
          </View>
        ) :null
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    // borderWidth: 2,
    // borderColor: 'red',
    // borderStyle: 'solid',

    justifyContent: 'center',
  },
  img: {
    height: 50,
    resizeMode:"contain",
  },
  title:{
    padding:5,
  }
});

export default Thumbnail;