import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Title from './Title'

interface ThumbnailProps {
  style: any

  imgUrl: string,

  titleText: string,
}
//图文布局组件(基于Image组件和Text组件布局)
const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    style,

    imgUrl,

    titleText,
  } = props
  return (
    <View style={style}>
     
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{ uri: imgUrl }}
            >
            </Image>
            <Title style={styles.title}>
              {titleText}
            </Title>
          </View>
       
    </View>
  );
};

//含container,Imgine组件,Title组件的布局风格
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