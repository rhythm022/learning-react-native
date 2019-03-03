import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
export const mockData = {
    "results": [
        {
            "key": "0",
            "multimedia": [
                {
                    "url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550241908401&di=2b004563ec085ab28debec88a86d3335&imgtype=0&src=http%3A%2F%2Fwww.lgstatic.com%2Fthumbnail_300x300%2Fi%2Fimage%2FM00%2F4B%2FC0%2FCgqKkVegU46AFq2QAAAZP6dkpJw873.png",
                    "format": "thumbLarge"
                }
            ],
            "title": "React Native",
            "byline": "By Facebook",
            "geo_facet": ["Menlo Park, California"],
            "published_date": "2016-05-20T00:00:00-5:00",
            "abstract": "Build Native Mobile Apps using JavaScript and React",
            "url": "https://facebook.github.io/react-native",
        },
        {
            "key": "1",
            "multimedia": [
                {
                    "url": "https://www.packtpub.com/sites/default/files/packt_logo.png",
                    "format": "thumbLarge"
                }
            ],
            "title": "Packt Publishing",
            "byline": "By Packt Publishing",
            "published_date": "2016-05-20T00:00:00-5:00",
            "geo_facet": ["Birmingham, UK"],
            "abstract": "Stay Relevant",
            "url": "https://www.baidu.com/",
        }
    ]
};
export const loadNews = () => ({
    type: LOAD_NEWS,
    payload: mockData
});
export const searchNews = (searchTerm) => ({
    type: SEARCH_NEWS,
    payload: searchTerm
});
//# sourceMappingURL=newsActions.js.map