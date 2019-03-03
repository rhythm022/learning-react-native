import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Title from './Title';
const Thumbnail = (props) => {
    const { style, url, titleText, } = props;
    return (<View style={style}>
      {url.length > 0 ? (<View style={styles.container}>
            <Image style={styles.img} source={{ uri: url }}>
            </Image>
            <Title style={styles.title}>
              {titleText}
            </Title>
          </View>) : null}
    </View>);
};
const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'red',
        // borderStyle: 'solid',
        justifyContent: 'center',
    },
    img: {
        height: 50,
        resizeMode: "contain",
    },
    title: {
        padding: 5,
    }
});
export default Thumbnail;
//# sourceMappingURL=Thumbnail.js.map