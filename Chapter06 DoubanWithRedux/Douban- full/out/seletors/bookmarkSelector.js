import { createSelector } from 'reselect';
import { allNewsSelector } from './newsSelectors';
const bookmarkSelector = (state) => state.bookmarks;
export const bookmarkNewsSelector = createSelector([allNewsSelector, bookmarkSelector], (newsItems, bookmarks) => newsItems.filter(newItem => bookmarks.indexOf(newItem.url) > -1));
//# sourceMappingURL=bookmarkSelector.js.map