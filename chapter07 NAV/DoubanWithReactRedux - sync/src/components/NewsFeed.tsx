import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  WebView
} from 'react-native';
import * as globalStyles from '../styles/globals';
import NewsItem from './newsItem'


export interface newsFeedProps {
  news: any[],
  
  loadNews?: Function,

  listStyle?:any,

}

export interface newsFeedState {
  modalVisible: boolean,
  modalUrl: string,
}
//列表组件(基于多个NewsItem组件布局)
export default class NewsFeed extends React.Component<newsFeedProps, newsFeedState> {
  constructor(props: newsFeedProps) {
    super(props);
    // this._renderItem = this._renderItem.bind(this)
    this._onModalClose = this._onModalClose.bind(this)
    this._onModalOpen = this._onModalOpen.bind(this)
    this.load = this.load.bind(this)
    this.state = {
      modalVisible: false,
      modalUrl: null,
    };
    this.load()
  }

  render() {
    const { 
       news,
       listStyle = globalStyles.COMMON.pageContainer
     } = this.props
    return (
      // <View style={globalStyles.COMMON.pageContainer}>
      <View style={listStyle}>
        <FlatList
          data={news}
          renderItem={this._renderItem}
        />
        {this.renderModal()}
      </View>
    );
  }

  
  _renderItem = ({ item }: any) => (
    <NewsItem
      style={styles.newsItem}
      onPress={() => this._onModalOpen(item.url)}

      imageUrl={item.imageUrl}
      title={item.title}

      author={item.author}
      date={item.date}
      location={item.location}

      description={item.description}
    />
  )

  _onModalClose() {
    this.setState({
      modalVisible: false,
      modalUrl: null,
    })
  }
  _onModalOpen(url: string) {
    this.setState({
      modalVisible: true,
      modalUrl: url,
    })
  }

  load() {
    if (this.props.loadNews) {
      this.props.loadNews()
    }
  }
  
  renderModal() {
    return (
      <Modal
        animationType='slide'
        visible={this.state.modalVisible}
        onRequestClose={this._onModalClose}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={this._onModalClose}>
            <Text>Close</Text>
          </TouchableOpacity>
          <WebView
            scalesPageToFit
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    )
  }
}

//含newsItem组件的布局风格
//不含container，因为NewsFeed组件是页面组件
const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    paddingTop: 20,

    backgroundColor: globalStyles.BG_COLOR,
  },
  modalCloseButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  newsItem: {
    marginBottom: 20,

  }
})