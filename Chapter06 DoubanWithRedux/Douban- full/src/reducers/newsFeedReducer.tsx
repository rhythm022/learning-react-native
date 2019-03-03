import {  LOAD_NEWS } from '../actions/actionTypes'

const initialState:NewsRawData[] = []

interface LoadNewsAction{
  type:string,
  payload:Payload,
}
interface Payload{
  count:number,
  start:number,
  total:number,
  subjects:NewsRawData[]
}
export interface NewsRawData{
  id:string,
  images:{[size:string]:string},
  original_title:string,

  genres:string[],
  subtype:string,
  directors:Person[],
  year:string,
  casts:Person[],

  alt:string,
  rating:Rating,
  collect_count:number,
}
interface Person{
  id:string,
  name:string,
  alt:string,
  avatars:{[size:string]:string},
}
interface Rating{
  max:number,
  average:number,
  starts:string,
  min:number,
}
import { reshapeNews } from '../util/dataTransformations'
import { allNewsSelector } from '../seletors/newsSelectors'

export default (state = initialState, action:LoadNewsAction):NewsRawData[] => {
  switch (action.type) {

  case LOAD_NEWS:
    return  action.payload.subjects || [];

  default:
    return state
  }
};
