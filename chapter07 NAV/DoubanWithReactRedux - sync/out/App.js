import { Provider } from 'react-redux';
import createStore from './createStore';
import React, { Component } from 'react';
import Nav from './components/Nav';
const store = createStore();
export default class App extends Component {
    render() {
        return (<Provider store={store}>
        <Nav />
      </Provider>);
    }
}
//# sourceMappingURL=App.js.map