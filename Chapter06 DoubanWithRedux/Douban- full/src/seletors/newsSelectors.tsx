import { createSelector } from 'reselect';
import { reshapeNews, filterNewsBySearchTerm } from '../util/dataTransformations'

const newsSelector = (state: any) => state.news

const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNews
)

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
)

//-------------------------------------------//
const searchTermSelector = (state: any) => state.searchTerm as string
const caseInsensitiveSearchTermSelector = createSelector(
    searchTermSelector,
    searchTerm => searchTerm.toLocaleLowerCase()
)

export const searchNewsSelector = createSelector(
    [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
    filterNewsBySearchTerm,
)