import {  LOAD_NEWS } from '../actions/actionTypes'

const initialState:NewsRawData[] = []

interface LoadNewsAction{
  type:string,
  payload:Payload,
}
interface Payload{
  results:NewsRawData[]
}
export interface NewsRawData{
  key:string,
  title:string,
  abstract:string,
  url:string,
  byline:string,
  published_date:string,
  geo_facet:string[],
  multimedia:Multimedia[],
}
interface Multimedia{
  url:string,
  format:string,
}
import { reshapeNews } from '../util/dataTransformations'
import { allNewsSelector } from '../seletors/newsSelectors'

export default (state = initialState, action:LoadNewsAction) => {
  switch (action.type) {

  case LOAD_NEWS:
    return  action.payload.results || [];

  default:
    return state
  }
};
