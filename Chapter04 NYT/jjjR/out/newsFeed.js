import * as React from 'react';
import { View, StyleSheet, Text, FlatList, Modal, TouchableOpacity, WebView } from 'react-native';
import * as globalStyles from './styles/globals';
import NewsItem from './newsItem';
const defaultNewsItems = [
    {
        key: '0',
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550241908401&di=2b004563ec085ab28debec88a86d3335&imgtype=0&src=http%3A%2F%2Fwww.lgstatic.com%2Fthumbnail_300x300%2Fi%2Fimage%2FM00%2F4B%2FC0%2FCgqKkVegU46AFq2QAAAZP6dkpJw873.png',
        title: 'React Native',
        author: 'Facebook',
        date: new Date(),
        location: 'Menlo Park, California',
        description: 'Build Native Mobile Apps using JavaScript and React',
        url: 'https://facebook.github.io/react-native',
    },
];
export default class newsFeedComponent extends React.Component {
    constructor(props) {
        super(props);
        this._renderItem = ({ item }) => (<NewsItem style={styles.newsItem} onPress={() => this._onModalOpen(item.url)} imageUrl={item.imageUrl} title={item.title} author={item.author} date={item.date} location={item.location} description={item.description}/>);
        // this._renderItem = this._renderItem.bind(this)
        this._onModalClose = this._onModalClose.bind(this);
        this._onModalOpen = this._onModalOpen.bind(this);
        this.state = {
            data: defaultNewsItems,
            modalVisible: false,
            modalUrl: null,
        };
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
          <TouchableOpacity style={styles.modalCloseButton} onPress={this._onModalClose}>
            <Text>Close</Text>
          </TouchableOpacity>
          <WebView scalesPageToFit source={{ uri: this.state.modalUrl }}/>

        </View>

      </Modal>);
    }
    render() {
        return (<View style={globalStyles.COMMON.pageContainer}>
      <FlatList data={this.state.data} renderItem={this._renderItem}/>
      {this.renderModal()}
    </View>);
    }
}
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
});
//# sourceMappingURL=newsFeed.js.map