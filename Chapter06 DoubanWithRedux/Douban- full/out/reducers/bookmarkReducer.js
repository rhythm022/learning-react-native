import { BOOKMARK, LOADED_BOOKMARKS } from '../actions/actionTypes';
const initialState = [];
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADED_BOOKMARKS:
            return payload;
        case BOOKMARK:
            return [...state, payload];
        default:
            return state;
    }
};
//# sourceMappingURL=bookmarkReducer.js.map