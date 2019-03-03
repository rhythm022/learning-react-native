import { SEARCH_NEWS } from '../actions/actionTypes';
const initialState:string = ''
interface SearchNewsAction{
  type:string,
  payload:string,
}
export default (state = initialState, action:SearchNewsAction) => {
  switch (action.type) {

  case SEARCH_NEWS:
    return action.payload;

  default:
    return state
  }
};
