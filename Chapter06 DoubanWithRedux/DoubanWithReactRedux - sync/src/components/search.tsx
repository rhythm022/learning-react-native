import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'
import * as globalStyles from '../styles/globals'
import NewsFeed from '../components/NewsFeed'



export interface SearchProps {
  filteredNews:any,
  searchNews:Function,
}

export interface SearchState {
  searchText:string,
}


export default class Search extends Component<SearchProps,SearchState> {
  constructor(props:any) {
    super(props)
    this._searchNews = this._searchNews.bind(this)
    this.state = {
       searchText:'',
    }
  }
  
  render() {
    const { 
      filteredNews,
      // SearchNews,
     } = this.props
    return (
      <View style={globalStyles.COMMON.pageContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder='Search'
            placeholderTextColor={globalStyles.MUTED_COLOR}
            value={this.state.searchText}
            onChangeText={this._searchNews}
            />

        </View>
        <NewsFeed news={filteredNews} listStyle={{}}/>
      </View>
    )
  }
  _searchNews(text:string){
    this.setState({ searchText: text })

    this.props.searchNews(text)
  }

}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    marginBottom: 5,

    borderColor: globalStyles.MUTED_COLOR,
    
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    
  },
  textInput: {
    height:50,//
    paddingHorizontal: 10,
    fontSize: 30,

    color: globalStyles.TEXT_COLOR,

    flex:1
  }
})
