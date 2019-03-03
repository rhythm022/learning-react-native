import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ActionSheetIOS, } from 'react-native';
import AppText from './AppText';
import Byline from './Byline';
import Thumbnail from './Thumbnail';
//复杂图文组件NewsItem(基于Thumbnail,Byline,AppText组件布局)(可触控)
export default class NewsItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onLongPress = () => {
            ActionSheetIOS.showActionSheetWithOptions({
                options: ['Bookmark', 'Cancel'],
                cancelButtonIndex: 1,
                title: this.props.title
            }, buttonIndex => {
                if (buttonIndex === 0) {
                    this.props.onBookmark();
                }
            });
        };
    }
    render() {
        const { style, onPress, imageUrl, title, author, date, genres, description, } = this.props;
        return (<TouchableOpacity style={[styles.container, style]} onLongPress={this._onLongPress} onPress={onPress}>
        <View>
          <Thumbnail style={styles.thumbnail} imgUrl={imageUrl} titleText={title}/>
          <View style={styles.content}>
            <Byline author={author} date={date} genres={genres}/>
            <AppText style={[]}>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>);
    }
}
//含container,content,Thumbnail组件,Byline组件,AppText组件的布局风格
const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'red',
    },
    thumbnail: {
        marginBottom: 5,
    },
    content: {
        paddingHorizontal: 50,
    }
});
//# sourceMappingURL=newsItem.js.map