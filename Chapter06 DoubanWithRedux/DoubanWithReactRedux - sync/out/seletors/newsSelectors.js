import { createSelector } from 'reselect';
import { reshapeNews, filterNewsBySearchTerm } from '../util/dataTransformations';
const newsSelector = (state) => state.news;
const reshapeNewsSelector = createSelector([newsSelector], reshapeNews);
export const allNewsSelector = createSelector([reshapeNewsSelector], newsItems => newsItems);
//-------------------------------------------//
const searchTermSelector = (state) => state.searchTerm;
const caseInsensitiveSearchTermSelector = createSelector(searchTermSelector, searchTerm => searchTerm.toLocaleLowerCase());
export const searchNewsSelector = createSelector([reshapeNewsSelector, caseInsensitiveSearchTermSelector], filterNewsBySearchTerm);
//# sourceMappingURL=newsSelectors.js.map