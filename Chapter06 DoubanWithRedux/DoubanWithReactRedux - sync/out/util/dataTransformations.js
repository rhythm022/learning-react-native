export const reshapeNews = (news) => (news.map(({ key, multimedia, title, byline, geo_facet, published_date, abstract, url, }) => ({
    key,
    imageUrl: getMultimediaUrlByFormat(multimedia, 'thumbLarge'),
    title: title,
    author: byline ? byline.replace('By ', '') : '',
    location: geo_facet.length > 0 ? geo_facet[0] : '',
    // date: moment(published_date).format('MMM Do YYYY'),
    date: published_date,
    description: abstract || '',
    url,
})));
const getMultimediaUrlByFormat = (multimedia, format) => {
    if (!multimedia) {
        return '';
    }
    const matchingFormat = multimedia.find(media => media.format === format);
    if (!matchingFormat) {
        return '';
    }
    return matchingFormat.url;
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