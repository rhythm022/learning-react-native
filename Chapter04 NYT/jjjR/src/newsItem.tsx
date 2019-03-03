import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import * as globalStyles from './styles/globals';
import AppText from './AppText'
import Byline from './Byline'
import Thumbnail from './Thumbnail'

// export interface NewsItemProps {
//   style?: any,
//   onPress: Function,

//   imageUrl?: string,
//   title: string,

//   author: string,
//   date: Date,
//   location?: string,

//   description?: string,

// }

export interface NewsItemState {
}

// export default class NewsItemComponent extends React.Component<NewsItemProps, NewsItemState> {
export default class NewsItemComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this._onLongPress = this._onLongPress.bind(this)
  }
  _onLongPress() { 
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Bookmark', 'Cancel'],
      cancelButtonIndex:1,
      title: this.props.title
    },buttonIndex => console.log('Button seleted',buttonIndex))
  }

  public render() {
    const {
      style,
      onPress,

      imageUrl,
      title,

      author,
      date,
      location,

      description,
    } = this.props
    return (
      <TouchableOpacity
        style={[styles.container,style]}
        onLongPress={this._onLongPress}
        onPress={onPress}
      >
        <View>
          <Thumbnail
            style={styles.thumbnail}
            url={imageUrl}
            titleText={title}
            // accentColor={accentColor}
          />
          <View style={styles.content}>
            <Byline
              author={author}
              date={date}
              location={location}
            />
            <AppText style={[]}>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: 150,
    backgroundColor: globalStyles.WH_COLOR,
  },
  thumbnail: {
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 50,
  }
})