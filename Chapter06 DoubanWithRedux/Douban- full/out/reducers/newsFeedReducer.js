import { LOAD_NEWS } from '../actions/actionTypes';
const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return action.payload.subjects || [];
        default:
            return state;
    }
};
//# sourceMappingURL=newsFeedReducer.js.map