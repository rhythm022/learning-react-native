import { createSelector } from 'reselect';
import { allNewsSelector } from './newsSelectors'

const bookmarkSelector = (state:any) => state.bookmarks;

export const bookmarkNewsSelector = createSelector(
    [allNewsSelector,bookmarkSelector],
    (newsItems,bookmarks:any[])=>newsItems.filter(newItem=>
        bookmarks.indexOf(newItem.url) > -1)

)