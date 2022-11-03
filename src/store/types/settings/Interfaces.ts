import { ActionTypes } from './ActionTypes'

export interface IInitialState {
  isPlaySound?: boolean
  wordOfDayTime?: number
  isPostLoading?: boolean
}

export interface ICleanSetting {
  type: ActionTypes.CLEAN_SETTING
}

export interface ISetSoundtrackStatus {
  type: ActionTypes.SET_SOUNDTRACK_STATUS
  isPlaySound?: boolean
}

export interface IUpdateWordOfDayLastTime {
  type: ActionTypes.UPDATE_WORD_OF_DAY_LAST_TIME
}

export interface IWrongWordRequest {
  type: ActionTypes.WRONG_WORD_REQUEST
  word?: string
}

export interface IOnWrongWordSuccess {
  type: ActionTypes.ON_WRONG_WORD_SUCCESS
}

export type IAction =
  | ICleanSetting
  | ISetSoundtrackStatus
  | IUpdateWordOfDayLastTime
  | IWrongWordRequest
  | IOnWrongWordSuccess
