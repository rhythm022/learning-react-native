import React, { Component } from 'react';
import { Text, TabBarIOS, Alert, Vibration, StatusBar } from 'react-native';
import SearchContainer from '../containers/SearchContainer';
import NewsFeedContainer from '../containers/NewsFeedContainerr';
StatusBar.setBarStyle('dark-content');
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "newsFeed"
        };
    }
    showBookmarkAlert() {
        Vibration.vibrate([1000, 2000, 3000], false);
        Alert.alert('Coming Soon', 'We\'re hard at work on this feature.', [
            { text: 'OK', onPress: () => console.log("User pressed OK") }
        ]);
    }
    render() {
        return (<TabBarIOS barTintColor="#4e4d52" tintColor="#48e9d9" translucent={false}>
        <TabBarIOS.Item systemIcon={'featured'} selected={this.state.tab === 'newsFeed'} onPress={() => this.setState({ tab: 'newsFeed' })}>
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon={'search'} selected={this.state.tab === 'search'} onPress={() => this.setState({ tab: 'search' })}>
          <SearchContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon={'bookmarks'} selected={this.state.tab === 'bookmarks'} onPress={() => this.showBookmarkAlert()}>
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>);
    }
}
//# sourceMappingURL=HomeScreen.js.map