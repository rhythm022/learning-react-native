import { createStore, combineReducers } from 'redux';
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';
export default (initialState = {}) => createStore(combineReducers({
    news: newsFeedReducer,
    searchTerm: searchTermReducer,
}), initialState);
//# sourceMappingURL=createStore.js.map