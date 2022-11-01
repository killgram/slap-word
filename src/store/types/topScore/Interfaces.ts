import { ActionTypes } from './ActionTypes'

export interface ITopScoreList {
  [key: string]: any
}

export interface IInitialState {
  isLoading?: boolean
  list?: Array<ITopScoreList>
  lastUpdate?: number
}

export interface ICleanTopScore {
  type: ActionTypes.CLEAN_TOP_SCORE
}

export interface IGetTopScore {
  type: ActionTypes.GET_TOP_SCORE
}

export interface IOnGetTopScoreSuccess {
  type: ActionTypes.ON_TOP_SCORE_SUCCESS
  list?: Array<ITopScoreList>
}

export type IAction = ICleanTopScore | IGetTopScore | IOnGetTopScoreSuccess
