import { SEARCH_NEWS } from '../actions/actionTypes';
const initialState = '';
export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_NEWS:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=searchTermReducer.js.map