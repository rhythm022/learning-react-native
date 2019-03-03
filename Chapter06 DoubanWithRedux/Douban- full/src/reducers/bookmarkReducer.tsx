import { BOOKMARK, LOADED_BOOKMARKS } from '../actions/actionTypes';

const initialState: any[] = []

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

        case LOADED_BOOKMARKS:
            return payload
        case BOOKMARK:
            return [...state, payload]

        default:
            return state
    }
}
