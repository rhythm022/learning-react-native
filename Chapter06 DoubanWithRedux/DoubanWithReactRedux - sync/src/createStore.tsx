import { createStore,applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';

import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';

export default (initialState = {}) => createStore(
  combineReducers({
    news:newsFeedReducer,
    searchTerm:searchTermReducer,
  }),
  initialState,
  // applyMiddleware(logger)
)


