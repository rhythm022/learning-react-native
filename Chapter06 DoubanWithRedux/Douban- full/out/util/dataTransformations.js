export function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}
export const reshapeNews = (news) => {
    return news.map(({ id, images, original_title, directors, genres, year, rating, alt, }) => ({
        key: id,
        imageUrl: getMultimediaUrlByFormat(images, 'small'),
        title: original_title,
        author: directors[0] ? directors[0].name.replace('By ', '') : '',
        genres: genres.length > 0 ? genres.join() : '',
        date: year,
        description: rating.average.toString() || '',
        url: alt,
    }));
};
const getMultimediaUrlByFormat = (multimedia, format) => {
    if (!multimedia) {
        return '';
    }
    const matchingFormat = multimedia[format];
    if (!matchingFormat) {
        return '';
    }
    return matchingFormat;
};
export const filterNewsBySearchTerm = (newsItems, searchTerm) => {
    if (searchTerm.length === 0) {
        return [];
    }
    return newsItems.filter(({ description, author, title, }) => (description.toLocaleLowerCase().indexOf(searchTerm) > -1 ||
        author.toLocaleLowerCase().indexOf(searchTerm) > -1 ||
        title.toLocaleLowerCase().indexOf(searchTerm) > -1));
};
//# sourceMappingURL=dataTransformations.js.map