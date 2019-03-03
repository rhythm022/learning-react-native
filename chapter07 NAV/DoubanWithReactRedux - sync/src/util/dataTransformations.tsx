import { NewsRawData } from '../reducers/newsFeedReducer'
interface NewsItem{
    key:string,
    imageUrl:string,
    title:string,

    author:string,
    location:string,
    date: string,

    description: string,
    
    url:string,
}
import moment from "moment";
export const reshapeNews = (news: NewsRawData[]):NewsItem[] => 
    ( news.map(
        ({ 
            key,
            multimedia,
            title,

            byline,
            geo_facet,
            published_date,

            abstract,

            url,
        }) => ({
            key,
            imageUrl:getMultimediaUrlByFormat(multimedia,'thumbLarge'),
            title:title,

            author: byline ?byline.replace('By ','') : '',
            location: geo_facet.length > 0 ? geo_facet[0] :'',
            // date: moment(published_date).format('MMM Do YYYY'),
            date: published_date,

            description: abstract || '',
            
            url,
        })
    )
)

const getMultimediaUrlByFormat = (multimedia:any[],format:string)=>{
    if (!multimedia){
        return '';
    }

    const matchingFormat = multimedia.find(media => media.format === format)
    if (!matchingFormat){
        return '';
    }

    return matchingFormat.url;
}


export const filterNewsBySearchTerm = (newsItems:NewsItem[],searchTerm:string):NewsItem[]=>{
    if (searchTerm.length === 0) {
        return [];
    }

    return newsItems.filter(
        ({
            description,
            author,
            title,
        })=>(
            description.toLocaleLowerCase().indexOf(searchTerm) > -1 ||
            author.toLocaleLowerCase().indexOf(searchTerm) > -1 ||
            title.toLocaleLowerCase().indexOf(searchTerm) > -1
        )
    )
}