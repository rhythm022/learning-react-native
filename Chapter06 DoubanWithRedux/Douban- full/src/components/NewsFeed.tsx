import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  WebView,
  RefreshControl,
  // ActivityIndicator,
  NetInfo,
  Linking,
} from 'react-native';
import * as globalStyles from '../styles/globals';
import NewsItem from './newsItem'
import AppText from './AppText';
import SmallText from './SmallText'


export interface newsFeedProps {
  news: any[],

  load?: Function,

  style?: any,

  pageContainer?: boolean,

  addBookmark?:Function,
}

export interface newsFeedState {
  modalVisible: boolean,
  modalUrl: string,

  refreshing: boolean,

  connected: boolean,

}

//列表组件(基于多个NewsItem组件布局)
export default class NewsFeed extends React.Component<newsFeedProps, newsFeedState> {
  static defaultProps = {
    pageContainer: true,
  }
  constructor(props: newsFeedProps) {
    super(props);
    this._onModalClose = this._onModalClose.bind(this)
    this._onModalOpen = this._onModalOpen.bind(this)

    this.state = {
      modalVisible: false,
      modalUrl: null,

      refreshing: true,

      connected: true,

    };
    NetInfo.addEventListener('connectionChange',
      this.handleConnectivityChange)
    this.loadNews()

  }


  render() {
    const {
      news,
      style,
      pageContainer = true,
    } = this.props

    const {
      refreshing,
    } = this.state

    if (!this.state.connected) {
      return (
        <View
          style={[pageContainer ? globalStyles.COMMON.pageContainer : style, {
            justifyContent: 'center',
            alignItems: 'center'
          }]}
        >
          <AppText style={[]}>
            No Connection
          </AppText>
        </View>
      )
    }
    return (pageContainer ? (
      <View style={globalStyles.COMMON.pageContainer}>
        <FlatList
          data={news}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.fetchData} />
          }
        />
        {this.renderModal()}
      </View>
    ) : (
        <View style={[styles.container, style]}>
          <FlatList
            data={news}
            renderItem={this._renderItem}
          />
          {this.renderModal()}
        </View>
      ));
  }

  _renderItem = ({ item }: any) => (
    <NewsItem
      style={styles.newsItem}
      onPress={() => this._onModalOpen(item.url)}
      onBookmark={()=>this.props.addBookmark(item.url)}


      imageUrl={item.imageUrl}
      title={item.title}

      author={item.author}
      date={item.date}
      genres={item.genres}

      description={item.description}

    />
  )

  loadNews = () => {
    if (this.props.load) {
      this.props.load()
    }
  }

  componentDidUpdate(prevProps: any) {
    if (this.state.refreshing == true) {
      this.setState({ refreshing: false })
    }
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange',
      this.handleConnectivityChange)
  }

  fetchData = () => {
    this.setState({ refreshing: true })
    this.loadNews()
  }

  handleConnectivityChange = (connectionInfo: any) => {
    const isConnected = connectionInfo.type === 'none' ? false : true;
    this.setState({
      connected: isConnected,
      // refreshing: isConnected,
    })

    if (isConnected) {
      this.loadNews()
    }
  }

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



  renderModal() {
    return (
      <Modal
        animationType='slide'
        visible={this.state.modalVisible}
        onRequestClose={this._onModalClose}>
        <View style={styles.modalContent}>
          <View
            style={styles.modalButton}
          >
            <TouchableOpacity
              onPress={this._onModalClose}>
              <SmallText>Close</SmallText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>Linking.openURL(this.state.modalUrl)}>
              <SmallText>Open in Browser</SmallText>
            </TouchableOpacity>
          </View>
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
  container: {},
  modalContent: {
    flex: 1,
    paddingTop: 20,

    backgroundColor: globalStyles.BG_COLOR,
  },
  modalButton: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newsItem: {
    marginBottom: 20,

  }
})