import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as globalStyles from './styles/globals';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    render() {
        return (<View style={globalStyles.COMMON.pageContainer}>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder='Search' placeholderTextColor={globalStyles.MUTED_COLOR} value={this.state.searchText} onChangeText={(text) => this.setState({ searchText: text })}/>

        </View>
      </View>);
    }
}
const styles = StyleSheet.create({
    search: {
        marginTop: 10,
        marginBottom: 5,
        borderColor: globalStyles.MUTED_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 30,
        color: globalStyles.TEXT_COLOR,
        flex: 1
    }
});
//# sourceMappingURL=search.js.map