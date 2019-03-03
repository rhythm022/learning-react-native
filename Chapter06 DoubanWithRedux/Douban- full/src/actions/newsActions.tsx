import { LOAD_NEWS, SEARCH_NEWS, } from './actionTypes';

const mockData = {
  id: '1',
  images: {
    'small': '1',
  },
  original_title: '1',

  genres: ['1', '1'],
  subtype: 1,
  directors: [{ name: '1223' }],
  year: '1000',
  casts: [{}],

  alt: '1',
  rating: { average: 100 },
  collect_count: 1111,
}
const payload = {
  subjects: [mockData]
}
import { sleep } from "../util/dataTransformations";
let count:number = 1;
export const loadNews = () => {
  const req = fetch(`http://api.douban.com/v2/movie/top250?start=${count%2?0:125}&count=125`)
  count +=1
  // payload.subjects[0].rating.average += 1

  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
    // payload
  }
}

export const searchNews = (searchTerm: string) => ({
  type: SEARCH_NEWS,
  payload: searchTerm
})

