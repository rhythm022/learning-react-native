import React, { Component } from 'react'
import { Text, View, TabBarIOS, Alert, Vibration, StatusBar } from 'react-native'
import Search from './search';
import NewsFeed from './newsFeed';

StatusBar.setBarStyle('dark-content');

export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      tab: "newsFeed"
    }
  }

  showBookmarkAlert() {
    Vibration.vibrate([1000, 2000, 3000], false);
    Alert.alert(
      'Coming Soon',
      'We\'re hard at work on this feature.',
      [
        { text: 'OK', onPress: () => console.log("User pressed OK") }
      ]
    )
  }

  render() {
    return (
      <TabBarIOS
        barTintColor="#4e4d52"
        tintColor="#48e9d9"
        translucent={false}
      >
        <TabBarIOS.Item
          systemIcon={'featured'}
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
        >
          <NewsFeed/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'search'}
          selected={this.state.tab === 'search'}
          onPress={() => this.setState({ tab: 'search' })}
        >
          <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'bookmarks'}
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

