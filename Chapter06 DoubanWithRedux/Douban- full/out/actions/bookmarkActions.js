import { AsyncStorage } from 'react-native';
import { BOOKMARK, LOADED_BOOKMARKS } from './actionTypes';
export const addBookmark = (url) => {
    AsyncStorage.getItem('bookmarks').then((bookmarks) => {
        if (bookmarks) {
            const bookmarkArray = JSON.parse(bookmarks);
            return AsyncStorage.setItem('bookmarks', JSON.stringify([...bookmarkArray, url]));
        }
        else {
            return AsyncStorage.setItem('bookmarks', JSON.stringify([url]));
        }
    });
    return {
        type: BOOKMARK,
        payload: url,
    };
};
export const loadBookmarks = () => ({
    type: LOADED_BOOKMARKS,
    payload: AsyncStorage.getItem('bookmarks').then((bookmarks) => {
        if (bookmarks) {
            return JSON.parse(bookmarks);
        }
        return [];
    })
});
//# sourceMappingURL=bookmarkActions.js.map