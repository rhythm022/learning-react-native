import * as React from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableOpacity, WebView, RefreshControl, 
// ActivityIndicator,
NetInfo, Linking, } from 'react-native';
import * as globalStyles from '../styles/globals';
import NewsItem from './newsItem';
import AppText from './AppText';
import SmallText from './SmallText';
//列表组件(基于多个NewsItem组件布局)
export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this._renderItem = ({ item }) => (<NewsItem style={styles.newsItem} onPress={() => this._onModalOpen(item.url)} onBookmark={() => this.props.addBookmark(item.url)} imageUrl={item.imageUrl} title={item.title} author={item.author} date={item.date} genres={item.genres} description={item.description}/>);
        this.loadNews = () => {
            if (this.props.load) {
                this.props.load();
            }
        };
        this.fetchData = () => {
            this.setState({ refreshing: true });
            this.loadNews();
        };
        this.handleConnectivityChange = (connectionInfo) => {
            const isConnected = connectionInfo.type === 'none' ? false : true;
            this.setState({
                connected: isConnected,
            });
            if (isConnected) {
                this.loadNews();
            }
        };
        this._onModalClose = this._onModalClose.bind(this);
        this._onModalOpen = this._onModalOpen.bind(this);
        this.state = {
            modalVisible: false,
            modalUrl: null,
            refreshing: true,
            connected: true,
        };
        NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
        this.loadNews();
    }
    render() {
        const { news, style, pageContainer = true, } = this.props;
        const { refreshing, } = this.state;
        if (!this.state.connected) {
            return (<View style={[pageContainer ? globalStyles.COMMON.pageContainer : style, {
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
          <AppText style={[]}>
            No Connection
          </AppText>
        </View>);
        }
        return (pageContainer ? (<View style={globalStyles.COMMON.pageContainer}>
        <FlatList data={news} renderItem={this._renderItem} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.fetchData}/>}/>
        {this.renderModal()}
      </View>) : (<View style={[styles.container, style]}>
          <FlatList data={news} renderItem={this._renderItem}/>
          {this.renderModal()}
        </View>));
    }
    componentDidUpdate(prevProps) {
        if (this.state.refreshing == true) {
            this.setState({ refreshing: false });
        }
    }
    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
    _onModalClose() {
        this.setState({
            modalVisible: false,
            modalUrl: null,
        });
    }
    _onModalOpen(url) {
        this.setState({
            modalVisible: true,
            modalUrl: url,
        });
    }
    renderModal() {
        return (<Modal animationType='slide' visible={this.state.modalVisible} onRequestClose={this._onModalClose}>
        <View style={styles.modalContent}>
          <View style={styles.modalButton}>
            <TouchableOpacity onPress={this._onModalClose}>
              <SmallText>Close</SmallText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(this.state.modalUrl)}>
              <SmallText>Open in Browser</SmallText>
            </TouchableOpacity>
          </View>
          <WebView scalesPageToFit source={{ uri: this.state.modalUrl }}/>
        </View>
      </Modal>);
    }
}
NewsFeed.defaultProps = {
    pageContainer: true,
};
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
});
//# sourceMappingURL=NewsFeed.js.map