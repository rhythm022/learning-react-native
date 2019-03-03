import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import * as globalStyles from '../styles/globals';
import AppText from './AppText'
import Byline from './Byline'
import Thumbnail from './Thumbnail'

export interface NewsItemProps {
  style:any
  onPress:any,
  onBookmark:any,

  imageUrl:string,
  title:string,

  author:string,
  date:string,
  genres:string,

  description:string,
}

export interface NewsItemState {
}

//复杂图文组件NewsItem(基于Thumbnail,Byline,AppText组件布局)(可触控)
export default class NewsItemComponent extends React.Component<NewsItemProps, any> {
  constructor(props: any) {
    super(props);

  }

  _onLongPress = ()=> { 
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Bookmark', 'Cancel'],
      cancelButtonIndex:1,
      title: this.props.title
    },buttonIndex =>{
      if (buttonIndex === 0 ) {
        this.props.onBookmark();
      }
    })
  }

  public render() {
    const {
      style,
      onPress,

      imageUrl,
      title,

      author,
      date,
      genres,

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
            imgUrl={imageUrl}
            titleText={title}
          />
          <View style={styles.content}>
            <Byline 
              author={author}
              date={date}
              genres={genres}
            />
            <AppText style={[]}>{description}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


//含container,content,Thumbnail组件,Byline组件,AppText组件的布局风格
const styles = StyleSheet.create({
  container:{
    height: 150,
    backgroundColor:'red',
  },
  thumbnail: {
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 50,
  }
})